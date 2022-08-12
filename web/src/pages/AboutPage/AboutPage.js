import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {


async function testFunction() {
   await fetch('http://localhost:8910/.netlify/functions/getMerchantId') 
        .then(response => response.json())
        .then(data => console.log(data));
}

  return (
    <>
    <button onClick={testFunction}>Test</button>
    </>
  )
}

export default AboutPage
