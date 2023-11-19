import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-do',
  description: 'Next js application to learn APIs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' w-full h-full bg-blue-100'>
        {children}
        <ToastContainer 
          autoClose={3000}
          hideProgressBar={true}
          theme='colored'
        />  
      </body>
    </html>
  )
}
