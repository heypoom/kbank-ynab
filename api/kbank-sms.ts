import * as ynab from 'ynab'
import {VercelRequest, VercelResponse} from '@vercel/node'

import {parseSMS} from '../utils/parse'
import {SaveTransaction} from 'ynab'

interface Payload {
  text: string
  authKey: string

  ynabToken?: string
  budgetId?: string
  accountId?: string
}

const {
  YNAB_TOKEN = '',
  YNAB_BUDGET_ID = '652f28d9-6bb5-4601-9737-90bc623821b2',
  YNAB_ACCOUNT_ID = '66d86558-f5a4-4df6-b8a0-0ec0e0688775',
  AUTH_KEY = 'sample',
} = process.env

async function handler(req: VercelRequest, res: VercelResponse) {
  const err = (error: string) => res.status(400).json({error})

  try {
    if (req.method !== 'POST') return res.json({ready: true, version: '1.0.0'})
    if (!req.body?.text) return err('invalid payload')

    const payload = req.body as Payload
    const {text, authKey} = payload

    const ynabToken = payload.ynabToken ?? YNAB_TOKEN
    const budgetId = payload.budgetId ?? YNAB_BUDGET_ID
    const accountId = payload.accountId ?? YNAB_ACCOUNT_ID

    if (!ynabToken) return err('missing token')
    const Ynab = new ynab.API(ynabToken)

    if (authKey !== AUTH_KEY) return err('invalid auth key')

    const sms = parseSMS(text)
    if (!sms?.amount) return err('sms is not from KBank')

    const memo = `via x-${sms.cardNo}: ${sms.payee} (${sms.balance} remaining)`

    const result = await Ynab.transactions.createTransaction(budgetId, {
      transaction: {
        account_id: accountId,
        date: sms.createdAt.toISOString(),

        // Unit is in milliunits
        amount: sms.amount * 1000,

        memo,
        payee_name: sms.payee,
        payee_id: null,
        category_id: null,
        flag_color: SaveTransaction.FlagColorEnum.Blue,
        approved: true,
        cleared: SaveTransaction.ClearedEnum.Cleared,
      },
    })

    const transactionId = result.data.transaction?.id
    const rateLimit = result.rateLimit

    res.send({
      ok: true,
      sms,
      budgetId,
      accountId,
      transactionId,
      rateLimit,
    })
  } catch (err) {
    res.status(500).send({error: err.message})
  }
}

export default handler
