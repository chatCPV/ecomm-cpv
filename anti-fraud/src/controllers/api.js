async function useApiAccounts(id) {
    const searchAccount = await fetch(`http://account-container:8001/accounts/${id}`)
    const accountFound = await searchAccount.json()
    return accountFound
  }
  module.exports = useApiAccounts
