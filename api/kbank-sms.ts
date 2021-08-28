import * as ynab from 'ynab'
import {VercelRequest, VercelResponse} from '@vercel/node'

import {parseSMS} from '../utils/parse'
import {SaveTransaction} from 'ynab'

interface Payload {
  text: string
  authKey: string
}

const {
  YNAB_TOKEN = '',
  YNAB_BUDGET_ID = '652f28d9-6bb5-4601-9737-90bc623821b2',
  YNAB_ACCOUNT_ID = '66d86558-f5a4-4df6-b8a0-0ec0e0688775',
  AUTH_KEY = 'sample',
} = process.env

const Ynab = new ynab.API(YNAB_TOKEN)

async function handler(req: VercelRequest, res: VercelResponse) {
  const err = (error: string) => res.status(400).json({error})

  try {
    if (req.method !== 'POST') return res.json({ready: true, version: '1.0.0'})

    if (!req.body?.text) return err('invalid payload')
    if (!YNAB_TOKEN) return err('missing token')

    const {text, authKey} = req.body as Payload
    if (authKey !== AUTH_KEY) return err('invalid auth key')

    const sms = parseSMS(text)
    if (!sms?.amount) return err('sms is not from KBank')

    const memo = `via x-${sms.cardNo}: ${sms.payee} (${sms.balance} remaining)`

    Ynab.transactions.createTransaction(YNAB_BUDGET_ID, {
      transaction: {
        account_id: YNAB_ACCOUNT_ID,
        date: sms.createdAt.toISOString(),
        amount: sms.amount,
        memo,
        payee_name: sms.payee,
        payee_id: null,
        category_id: null,
        flag_color: SaveTransaction.FlagColorEnum.Blue,
        approved: true,
        cleared: SaveTransaction.ClearedEnum.Cleared,
      },
    })

    res.send({ok: true, result: sms})
  } catch (err) {
    res.status(500).send({error: err.message})
  }
}

export default handler
