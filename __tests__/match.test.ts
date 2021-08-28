import {parseSMS} from '../utils/parse'

describe('Transaction Parsing', () => {
  it('can parse transactions', () => {
    const text =
      'Paid THB50.00 by card no. x-1234 @ WWW.GRAB.COM 25/08/21 13.36 Available Balance THB 123456.78'

    const sms = parseSMS(text)
    if (!sms) return

    expect(sms.amount).toBe(50)
    expect(sms.balance).toBe(123456.78)

    expect(sms.cardNo).toBe('1234')
    expect(sms.payee).toBe('WWW.GRAB.COM')

    expect(sms.createdAt.toISOString()).toBe('2021-08-25T06:36:00.000Z')
  })
})
