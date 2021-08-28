import {VercelRequest, VercelResponse} from '@vercel/node'

function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.json({ready: true, version: '1.0.0'})

  res.send({ok: true})
}

export default handler
