import React from 'react'
import Card from '../Card'
import { useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import { MdCopyAll, MdDone } from 'react-icons/md'
import copy from 'copy-to-clipboard'
import { ReactComponent as bitcoinIcon } from '@/assets/cryptocurrency/bitcoin.svg'
import { ReactComponent as etheriumIcon } from '@/assets/cryptocurrency/etherium.svg'
import { ReactComponent as usdtIcon } from '@/assets/cryptocurrency/usdt.svg'
import { ReactComponent as litecoinIcon } from '@/assets/cryptocurrency/litecoin.svg'
import { ReactComponent as tonIcon } from '@/assets/cryptocurrency/ton.svg'
import { ReactComponent as tronIcon } from '@/assets/cryptocurrency/tron.svg'
import { ReactComponent as moneroIcon } from '@/assets/cryptocurrency/monero.svg'
import { ReactComponent as oxenIcon } from '@/assets/cryptocurrency/oxen.svg'

export function Donate() {
  const translation = useAppSelector(selectTranslation).DONATE

  return (
    <div className='flex gap-10 flex-col-reverse 900px:flex-row'>
      <Card
        containerClassname='flex-1'
        className='w-full'
      >
        <div className='h-full flex flex-col gap-6'>
          <Coin name='Tron, USDT TRC20' icons={[tronIcon, usdtIcon]}>
            <CopyAddressButton>THgEkWLWJsLFJ5FfQFCasF1zbwJNLHyrkF</CopyAddressButton>
          </Coin>
          <Coin name='Etherium, USDT ERC20' icons={[etheriumIcon, usdtIcon]}>
            <CopyAddressButton>0xE3e548ae4f1f74195857084ED335EF89C29Ce43c</CopyAddressButton>
          </Coin>
          <Coin name='Monero XMR' icons={[moneroIcon]}>
            <CopyAddressButton>43MTCc7BsyZip4YUpRSqGahUPf8NefifvW6KXEXttTXicTbMfAehtny26HuU84pzQNQmodxzWoTaPAL5aqPjAUo4DtkvXBV</CopyAddressButton>
          </Coin>
          <Coin name='🇷🇺 Card2Card' icons={[]}>
            <CopyAddressButton>2200700620662600</CopyAddressButton>
          </Coin>
          <Coin name='🇬🇪 Bank2Bank' icons={[]}>
            <CopyAddressButton>GE39CD0360000042481009</CopyAddressButton>
          </Coin>
          <Coin name='Bitcoin' icons={[bitcoinIcon]}>
            <CopyAddressButton>bc1q6l065yaa6zc2p4798rc9fcyud8mmny8sk8995f</CopyAddressButton>
          </Coin>
          <Coin name='Litecoin' icons={[litecoinIcon]}>
            <CopyAddressButton>ltc1qnvzl0zgcg22tm269a6ny95ept93l6009348y3c</CopyAddressButton>
          </Coin>
          <Coin name='TON' icons={[tonIcon]}>
            <CopyAddressButton>UQDFBtua92AYG8DgLd8x7h10PMpyuOvOxdNaEdc4-rwe1u59</CopyAddressButton>
          </Coin>
          <Coin name='OXEN' icons={[oxenIcon]}>
            <CopyAddressButton>L6j1Kam6QQfKetnvxwyAbe2eUPFuL1bZuYeDWepm7G7cM8cGh3EZBgncrpkMFN5sRKP2pWGLdxpbLf5DRYSnhBY2PypkhLC</CopyAddressButton>
          </Coin>
        </div>
      </Card>
      <Card containerClassname='flex-1 h-fit' className='self-start'>
        <p className='max-w-full leading-normal' dangerouslySetInnerHTML={{ __html: translation.INFO }} />
      </Card>
    </div>
  )
}

function Coin({ children, name, icons }: {
  children: React.ReactNode
  name: string
  icons: React.FunctionComponent<React.SVGAttributes<SVGElement>>[]
}) {
  return (
    <div className='flex flex-col w-full gap-2'>
      <div className='flex gap-2 items-center'>
        {icons.map((Icon, i) => (
          <span key={i} className='inline-block w-6 h-6'>
            <Icon className='w-6 h-6' />
          </span>
        ))}
        <span className='font-semibold'>
          {name}
        </span>
      </div>
      {children}
    </div>
  )
}

function CopyAddressButton({ children }: {
  children: string
}) {
  const [isCopied, setIsCopied] = React.useState(false)

  const handleCopy = () => {
    copy(children)
    setIsCopied(true)
  }

  return (
    <button className='text-sm font-medium font-mono text-left bg-transparent shadow-sm border border-solid border-[--button-outline] rounded-md px-4 py-2 cursor-pointer hover:bg-[--button-bg] transition-colors flex gap-2 items-center text-inherit' onClick={handleCopy} onPointerLeave={() => setIsCopied(false)}>
      {isCopied ? <MdDone /> : <MdCopyAll />}
      <span className='text-ellipsis overflow-hidden flex-1 text-nowrap'>
        {children}
      </span>
    </button>
  )
}