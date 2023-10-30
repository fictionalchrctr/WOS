// import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './scss/App.scss'
import ApiRequest from './components/apiRequest'

const API_URL = 'https://vortex.korabli.su/api/graphql/glossary/'

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <div>Hello</div>
      <ApolloProvider client={client}>
        <ApiRequest />
      </ApolloProvider>
    </>
  )
}

export default App
