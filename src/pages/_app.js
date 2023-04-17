import MainLayout from '@/components/layout/mainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  ) 
}
