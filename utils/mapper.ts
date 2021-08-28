interface PayeeInfo {
  payeeName?: string | null
  payeeId?: string | null
  categoryId?: string | null
}

export const category = {
  Groceries: 'b556d009-9839-46c1-bebb-23c8f86ba4ce',
  FoodDelivery: '4d20a28f-7848-4423-983c-0c4824db4ef7',
  Snacks: '75b980f8-c69c-4183-825a-fd5761b70b19',
  EatOut: 'd5ebfaf5-8775-48b4-bf62-ba5a23959fac',
  EatAtTDPK: '5df101da-8f96-47f1-9bad-bf36a0527685',
  Laundry: '830db753-3da6-4afb-a020-e4403e4ba7b1',
  'Utilities 🌟': '2f56c92d-5609-47c6-a166-7676b6acea9e',
  Internet: '6afaf1bd-325a-4a3c-b223-e05f430d4e88',
  'Medical Expense': '66be0496-66a6-4644-ac01-a786a9c9284f',
  'Misc 💎': 'c571474f-66a5-4fde-957a-e6b4ee1b70ad',
  ForJune: 'ff275753-4529-472d-84c5-805e6419947a',
  'Water 💧': '033a358e-407b-401e-8120-8bba3146148d',
  'Wi-Fi 🌍': '27c469b8-aacb-493e-986d-ced400b9c720',
  'Electric ⚡️': '51ab2ebc-7758-451c-9daf-32bf4546bf2f',
  'Rent 🏡': '7140cb69-677f-4f72-ab25-805584586e34',
  'Interest & Fees': '7eb77178-adeb-4f06-9f1c-00aae6cac919',
  'Auto Maintenance': '3afe19dd-5ffc-4200-8e22-463046444d4a',
  'Home Maintenance': '1f51e292-6790-4d07-8c91-d9428faf1f42',
  "Renter's/Home Insurance": '87ab5086-0582-4d21-87e5-0c2205a20463',
  Medical: '58e112e6-c0bd-42fb-97e6-b136ff77857c',
  Clothing: '8e875b19-1eeb-4877-96db-511927e816a1',
  Gifts: '41b11369-e3a9-43c8-b76b-51ca21624914',
  Giving: 'af1a7b80-50a3-4025-945f-6ffe5307a8be',
  'Computer Replacement': 'a25bb11e-28d9-4376-a0a8-6121811ef750',
  Games: '966d951a-2e3c-4e3c-be14-ec9b46beaa67',
  SoftwareLicense: 'b9e0f799-aa5f-493f-9f2c-5a139b418020',
  'Cloud Services 🌥': '2dcb1b99-d233-4ea0-b321-2eb54c37696a',
  SoftwareSubscriptions: '468d2a1e-4492-40f0-8339-a0898197c825',
  'Stuff I Forgot to Budget For': 'c31d2b1d-09f9-48b3-8eb7-9e53b64b45d5',
  Fun: 'e51805cb-0bda-4aab-a241-c309f4e35297',
  'Gift 🎁': '61deee10-903f-45d8-a4a8-f2ef819d1eec',
  'Aeron Chair 💎': '939fe3ce-181a-42e4-a4d4-48c32637941a',
  'BTS 🚆': 'e9d5a51d-389e-41eb-be3c-b06e59022413',
  'Motorcycle 🏍': '335ae154-2da2-4229-a016-ee64e36317d5',
  Taxi: 'f627f321-120e-4c59-91cd-c36c78dd9553',
  Dishwasher: '2bab0523-9ca2-4b7d-b735-b7317ea05a32',
  'Inflow: Ready to Assign': '5acb5715-2d9d-47da-8bd6-1bf4f0c8ad8d',
  Uncategorized: 'e4669402-a7d4-457f-949a-63b361c8856e',
  Vacation: '2554d237-d5f6-43b9-935b-5cb0be5331b8',
  Chill: '832d1c10-493f-4e91-b2ab-23d94aea04e1',
  Hotel: '329134e7-aee2-4bc9-ba4b-00fc570d76b4',
  'For June 💖': 'c3de38f0-6939-40e6-88ba-d3541a1dab12',
  Education: '0d8cf8a4-fb70-4ffc-9425-025ffa0624e6',
  'Books 📚': '0a7606b6-8d67-471d-8673-1f797d8764d2',
  Ikea: '11062ad3-6ee2-4256-ac4c-c576cbb00796',
  'Purchases: Ikea': 'd1d32dca-b4fa-44f2-83ca-3554d14003fb',
  'Shopee 🛍': '0abf7666-26bc-48db-9d01-65c95f3f2148',
  'Furniture 🛌': 'f615bee5-b5ca-4f42-9ec4-8a9e32543ed8',
  'Passion Projects 🌟': '3379166b-dc1f-43db-b632-3512bde2b338',
  'Dev Community 👩🏻‍💻': '9d687a8e-88ad-47f0-a505-b7174df96895',
  'Student Loan': '2ea3fa01-a414-4125-acdc-33c422ec6651',
  'Auto Loan': 'f84a4ab5-ab1d-4509-b979-caf09b8309c2',
  'Markus Chair': 'b2507420-c7ce-4953-bb54-8155fdcde8af',
  'iPhone 📱': '19292fa7-7468-47c3-9a61-226337edbeab',
  'MacBook Pro 💻': '9ee59a8b-d1ef-42c8-86a4-da15f72fef11',
  'Xiaomi Mijia 1C 🤖': 'c503aab9-a364-461f-967d-a64b986efc38',
  'Savings for Prayuth Tax 5%🖕🏻': 'a8160bda-2dce-4706-9155-12204798b6ef',
  'Donations 7% 🚑 ': '4cd7aa1c-8fb0-4f18-92b7-fab817be4e5e',
  'Life Insurance 8% 🌳': '453aa46c-0c53-471a-bc1b-26f7013fd39f',
  'Health Insurance 4% 🏥': 'ce1ff2c1-e128-4e0f-879b-e5f561a6382f',
  'Funds 36% 💰': 'cd58cbb8-1022-4991-b38a-1bc62347ad55',
  'Global ETF/DeFi/Stocks/Gold 40% 📈': 'f88b7bec-794e-4063-8a8e-2c6f8eaf51fe',
  'RMF Funds': 'b99a6107-29f1-4f33-a693-15cbc8146124',
  'Fucking Taxes': '16e59cb2-0c97-40b4-ad67-c516ef9d8a36',
  'Invest in Global Market (45%)': '6a9e0c1a-1c64-41ea-a326-d8ea2d03b222',
  'Invest in Dividend Stocks (25%)': 'a2574acc-d598-478e-8e9c-179a4e4a9b26',
  'Invest in Thai Market (15%)': '82f56041-dba8-412d-bf4d-384c11c089c1',
  'Invest in Gold (15%)': '51758a43-8ca0-467c-acf4-600e074f0f4e',
  Investment: 'ce6b8f50-19de-417c-b2ac-a1c3b67de3c2',
  'Global Market (~45%)': '456ba15d-c5b2-417a-a348-0e133f36a547',
  'Dividend Stocks (~25%)': '52606c14-930f-4d43-9ad2-5174f45de0b4',
  'Thai Market (~15%)': 'faa60bc9-94cf-47d6-98ee-59538ea03414',
  'Cash Security (1 Year)': '4d631eb4-13f0-45ad-a567-49a7ae7af4a4',
}

export const transactionMapper: Record<string, PayeeInfo> = {
  'WWW.GRAB.COM': {
    payeeName: 'Grab Taxi',
    categoryId: category.Taxi,
  },

  'GRABTAXI (THAILAND) CO': {
    payeeName: 'Grab Taxi',
    categoryId: category.Taxi,
  },

  'LINEPAY*LINEMANLINEMANC': {
    payeeName: 'Line Man',
    categoryId: category.FoodDelivery,
  },

  'LINEPAY*LINEMANLINEMANF': {
    payeeName: 'Line Man',
    categoryId: category.FoodDelivery,
  },

  'ONLYFANS.COM': {
    payeeName: 'Onlyfans',
    categoryId: category.Fun,
  },

  'OBSIDIAN.MD': {
    payeeName: 'Obsidian',
    categoryId: category.SoftwareLicense,
  },

  '1PASSWORD': {
    payeeName: '1Password',
    categoryId: category.SoftwareLicense,
  },

  'TOPS-101 THE THIRD PLACE': {
    payeeName: 'Tops',
    categoryId: category.Groceries,
  },

  'DONKI MALL THONGLOR': {
    payeeName: 'Donki',
    categoryId: category.Groceries,
  },

  'ADVANCE MPAY': {
    payeeName: 'AIS',
    categoryId: category.Internet,
  },

  'ADVANCE MPAY( Airtime Po': {
    payeeName: 'AIS',
    categoryId: category.Internet,
  },

  'Hotel at Booking.com': {
    payeeName: 'Booking.com',
    categoryId: category.Hotel,
  },

  Google: {
    payeeName: 'Google',
    categoryId: category.SoftwareSubscriptions,
  },

  'Google Asia Pacific Pt GS': {
    payeeName: 'Google',
    categoryId: category.SoftwareSubscriptions,
  },

  'GOOGLE* Cloudflare': {
    payeeName: 'Cloudflare',
    categoryId: category.SoftwareSubscriptions,
  },

  'GOOGLE* YouTubePremium': {
    payeeName: 'YouTube Premium',
    categoryId: category.SoftwareSubscriptions,
  },

  'WWW.BNN.IN.TH': {
    payeeName: 'Banana IT',
    categoryId: category.Fun,
  },

  'APPLE.COM/BILL': {
    payeeName: 'Apple',
    categoryId: category.SoftwareSubscriptions,
  },

  'AMAZON PRIME VIDEO TH': {
    payeeName: 'Amazon Prime',
    categoryId: category.SoftwareSubscriptions,
  },

  'PAYPAL* DISCORD': {
    payeeName: 'Discord',
    categoryId: category.SoftwareSubscriptions,
  },

  'PAYPAL *SPOTIFY': {
    payeeName: 'Spotify',
    categoryId: category.SoftwareSubscriptions,
  },

  'OMISE*Robinhood': {
    payeeName: 'Robinhood',
    categoryId: category.FoodDelivery,
  },

  '2C2P-IKANO BANGNA': {
    payeeName: 'Ikea',
    categoryId: category.Ikea,
  },

  'PAYPAL *SCRIBD.COM INVO': {
    payeeName: 'Scribd',
    categoryId: category.SoftwareSubscriptions,
  },

  'OMISE*VEGGIOLOGY': {
    payeeName: 'Veggiology',
    categoryId: category.Groceries,
  },

  'PAYPAL *FONTAWAESOME': {
    payeeName: 'Font Awesome',
    categoryId: category.SoftwareSubscriptions,
  },

  'TMN 7-11': {
    payeeName: '7-11',
    categoryId: category.Snacks,
  },

  'TMN FAST FOOD': {
    payeeName: '7-11',
    categoryId: category.EatAtTDPK,
  },

  'KINOKUNIYA BOOK STORES': {
    payeeName: 'Kinokuniya',
    categoryId: category.ForJune,
  },

  'KUB KAO KUB PLA': {
    payeeName: 'Kub Kao Kub Pla',
    categoryId: category.EatOut,
  },

  'PAYPAL *HUMBLEBUNDL': {
    payeeName: 'Humble Bundle',
    categoryId: category.Games,
  },
}

export function getPayeeInfo(smsPayee: string): PayeeInfo {
  const mappedPayee = transactionMapper[smsPayee]
  if (mappedPayee) return {payeeName: null, payeeId: null, ...mappedPayee}

  return {payeeName: smsPayee, payeeId: null, categoryId: null}
}
