import Head from 'next/head'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyper</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mechanical-arm_1f9be.png" />
      </Head>
      <body className="font-body bg-backgroundDark">
        <div className="flex flex-col items-center text-center mx-auto px-5 h-screen">
          <div className="flex flex-1 flex-col items-center justify-center py-10 text-white text-xl text-center">
            <div className="mt-0 max-w-1/10">
              <img src="/images/kyperlogowhite.png"/>
            </div>
            <div className="flex items-center justify-center text-center font-bold mt-8">
              <Tilt>
                <div className="w-44 h-84 border-4 border-blue-500 rounded-2xl"/>
              </Tilt>
            </div>
            <div className="mt-8 max-w-md">
              THE SEARCH PLATFORM FOR CREATORS
            </div>
            <div className="mt-1 max-w-sm">
              <a href="https://twitter.com/kiranecherukuri"className="text-blue-700 text-sm">FOLLOW THE STORY</a>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col items-center justify-center w-full py-5 px-8 mb-5 leading-loose font-thin text-center text-xs sm:text-sm">
          <div className="flex items-center justify-center w-full text-white space-x-4">
            <div className="flex">
              <a href="https://twitter.com/kyperneuro" className="hover:text-blue-500">TWITTER</a>
            </div>
            <div className="flex">
              <a href="mailto:hey@kyperneuro.com" className="hover:text-blue-500">CONTACT</a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </body>
    </div>
  )
} 
