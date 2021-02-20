import Head from 'next/head'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyper</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mechanical-arm_1f9be.png" />
      </Head>
      <body className="font-body bg-background">
        <div className="flex flex-col items-center text-center py-8 mx-auto px-5 h-screen">
            <div className="mt-0 max-w-1/6 md:max-w-1/10">
              <img src="/images/kyperlogoblack.png"/>
            </div>
          <div className="flex flex-1 flex-col items-center justify-center py-2 text-black text-xl text-center md:py-10">
            {/* <Tilt>
              <div className="shadow-xl bg-multiverse text-black rounded-xl flex items-center justify-center w-72 h-72">
                <div className="Text-lg">
                  VERSE
                </div>
              </div>
            </Tilt> */}
            <Tilt>
              <img src='/images/multiverse.jpg' className="object-cover shadow-xl bg-multiverse text-black rounded-xl flex items-center justify-center w-72 h-72" />
            </Tilt>
            <div className="mt-8 max-w-md text-lg">
              THE SEARCH PLATFORM FOR CREATORS
            </div>
            <div className="mt-1 max-w-sm">
              <a href="https://twitter.com/kiranecherukuri"className="text-blue-700 text-sm">FOLLOW THE STORY</a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-5 mb-5 leading-loose font-thin text-center text-xs sm:text-sm">
            <div className="flex items-center justify-center w-full text-black space-x-4">
              <div className="flex">
                <a href="https://twitter.com/kyperneuro" className="hover:text-blue-500">TWITTER</a>
              </div>
              <div className="flex">
                <a href="mailto:hey@kyperneuro.com" className="hover:text-blue-500">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
} 
