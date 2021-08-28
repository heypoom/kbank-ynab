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

//  '50.00',
//   '1234',
//   'WWW.GRAB.COM',
//   '25/08/21',
//   '13.36',
//   ' 123456.78',

export function parseSMS(sms: string): Transaction | null {
  if (!sms) return null

  const match = sms.match(regex)
  if (!match) return null

  const [_, amount, cardNo, payee, date, time, balance] = match

  const createdAt = parseDate(`${date} ${time}`, 'dd/MM/yy kk.mm', new Date())

  return {
    payee,
    cardNo,
    createdAt,
    amount: parseFloat(amount) || 0,
    balance: parseFloat(balance) || 0,
  }
}
