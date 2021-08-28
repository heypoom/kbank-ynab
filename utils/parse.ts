import {parse as parseDate} from 'date-fns'

export interface Transaction {
  amount: number
  balance: number

  payee: string
  cardNo: string

  createdAt: Date
}

const regex =
  /^Paid THB(.*) by card no\. x\-(.*) @ (.*)\s(.*)\s(.*) Available Balance THB(.*)/

const parseAmount = (text: string) => parseFloat(text.replace(/,/g, '')) || 0

export function parseSMS(sms: string): Transaction | null {
  if (!sms) return null

  const match = sms.match(regex)
  if (!match) return null

  const [_, amount, cardNo, payee, date, time, balance] = match

  const createdAt = parseDate(`${date} ${time}`, 'dd/MM/yy kk:mm', new Date())

  return {
    payee: payee.trim(),
    cardNo: cardNo.trim(),
    createdAt,
    amount: parseAmount(amount),
    balance: parseAmount(balance),
  }
}
