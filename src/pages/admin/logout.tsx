import Preloader from '@/components/preloader'
import Storage from '@/utils/storage'
import { useRouter } from 'next/router';
import React from 'react'

const storage = new Storage();
const LogoutPage = () => {
    const router = useRouter()
    React.useEffect(() => {
        storage.remove('token')
        storage.remove('role')
        storage.remove('userDetail')
        router.push('/admin/login')
    }, [])
  return <Preloader />
}

export default LogoutPage
