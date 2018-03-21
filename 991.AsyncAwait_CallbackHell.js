function breathe (amount, cb) {
  setTimeout(() => {
    console.log(`Done for ${amount} ms`)
    cb()
  }, amount)
}
breathe(5000, () => {
  breathe(2000, () => {
    breathe(1000, () => {
    })
  })
})
