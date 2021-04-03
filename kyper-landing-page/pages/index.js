import Head from 'next/head'
import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyper</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mechanical-arm_1f9be.png" />
      </Head>
      <body className="font-sans bg-black">
        <div className="flex flex-1 flex-col max-w-sm py-8 px-6 h-screen">
          <div className="flex flex-col">
            <img src="/images/kyperlogowhite.png" className="max-w-1/5 mb-8"/>
            <div className="mb-10">
              <div className="text-xs text-laserblue font-sans font-bold">
                PRODUCTS
              </div>
              <div className="mt-1 text-xl text-white font-semibold">
                Verse
              </div>
            </div>
            <div className="mb-10">
              <div className="text-xs text-laserblue font-sans font-bold">
                THESIS
              </div>
              <div className="mt-1">
                <div className="text-xl text-white font-medium">
                  <a href="" className="hover:text-laserblue">Supernova</a>
                </div>
                {/* <div className="text-sm text-gray-500 font-sans font-medium">
                  The end of the beginning
                </div> */}
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  Perfect alignment
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  Rocket Fuel
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  These are not the same
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  I'm a business, man!
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  NFTs
                </div>
              </div>
              <div className="mt-3">
                <div className="text-xl text-white font-medium">
                  Metahopping
                </div>
              </div>
              
            </div>
            <div className="mb-6">
              <div className="text-xs text-laserblue font-sans font-bold">
                STORY
              </div>
              <div className="mt-1 text-xl text-white font-medium">
              <a href="https://twitter.com/kiranecherukuri/status/1378178405787648000?s=20" className="hover:text-laserblue">The Story of Verse</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-xs font-semibold text-white mt-auto">
            <div className="flex">
              <a href="mailto:hey@kyperneuro.com" className="hover:text-laserblue">hey@kyperneuro.com</a>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
} 
