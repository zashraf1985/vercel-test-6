import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Layout,  
  Page,
  Text,
  List,
  Link,
  Button,
} from '@vercel/edge-functions-ui'

const Home = () => {
  return (
    <Page>
      <Text variant="h2">Products (sorted by: Popular first)</Text>
      <br />
      <List>
        <Text variant="description">1. Best Shirt ($69.99)</Text>
        <Text variant="description">2. Awesome Shoes ($49.99)</Text>        
        <Text variant="description">3. Cool Socks ($9.99)</Text>
      </List>
    </Page>
  )
}

export default Home

Home.Layout = Layout
