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
                  <a href="https://www.notion.so/kyper/Supernova-01a83bb7d3e846978f9873c98d9db213" className="hover:text-laserblue">Supernova</a>
                </div>
                {/* <div className="text-sm text-gray-500 font-sans font-medium">
                  The end of the beginning
                </div> */}
              </div>
              <div className="mt-4">
                <div className="text-xl text-white font-medium">
                  <a href="https://www.notion.so/kyper/The-Internet-s-Greatest-Feature-b7670cfb13414af28bd15f0dd44c2063" className="hover:text-laserblue">The Internet's Greatest Feature</a>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl text-white font-medium">
                  <a href="https://www.notion.so/kyper/Listen-to-the-Kids-Bro-848dc7447e52410abfb38b5643958ec2" className="hover:text-laserblue">Listen to the Kids Bro</a>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl text-white font-medium">
                  <a href="https://www.notion.so/kyper/I-m-not-a-businessman-I-m-a-business-man-a47de285c4404429815dc91da69fc55f" className="hover:text-laserblue">I'm not a businessman, I'm a business, man!</a>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl text-white font-medium">
                  <a href="https://www.notion.so/kyper/Metahopping-7b32d2c6485b49b3ace5b7afab73b9b0" className="hover:text-laserblue">Metahopping</a>
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
