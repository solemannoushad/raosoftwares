import { useRouter } from 'next/router';
import React from 'react'

function FunctionalityPage() {
  const router = useRouter();
  const { functionality } = router.query;
  console.log(functionality)
  return (
    <div>
      
    </div>
  )
}

export default FunctionalityPage;
