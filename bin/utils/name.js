const hash = () => {
  // between 100MN and 1BN
  return Math.floor(Math.random() * 999999999 + 100000000).toString(36)
}

module.exports = {
  branch: (name) => name ? name : `smalls-cp-${hash()}`,
  backupBranch: () => `smalls-backup-${hash()}`,
}
