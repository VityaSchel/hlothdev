import React from 'react'
import Card from '../Card'
import styles from '../styles.module.scss'
import { BiLinkExternal } from 'react-icons/bi'
import Skeleton from '@mui/material/Skeleton'
import { useAppSelector } from '@/store/hooks'
import { selectTranslation } from '@/store/reducers/translation'
import firstConceptArt from '@/assets/images/aboutSite/first-concept-art.jpeg'
import blenderScreenshot from '@/assets/images/aboutSite/blender-screenshot.jpeg'
import site4thscreenshot1 from '@/assets/images/aboutSite/4th-site-screenshot-1.png'
import site4thscreenshot2 from '@/assets/images/aboutSite/4th-site-screenshot-2.png'
import site4thscreenshot3 from '@/assets/images/aboutSite/4th-site-screenshot-3.png'
import site4thscreenshot4 from '@/assets/images/aboutSite/4th-site-screenshot-4.png'
import site5thScreenshot1 from '@/assets/images/aboutSite/5th-site-screenshot-1.png'
import site5thScreenshot2 from '@/assets/images/aboutSite/5th-site-screenshot-2.png'
import site5thScreenshot3 from '@/assets/images/aboutSite/5th-site-screenshot-3.png'
import site5thScreenshot4 from '@/assets/images/aboutSite/5th-site-screenshot-4.png'
import site5thScreenshot5 from '@/assets/images/aboutSite/5th-site-screenshot-5.png'
import site5thScreenshot6 from '@/assets/images/aboutSite/5th-site-screenshot-6.png'

export function AboutSite() {
  const translation = useAppSelector(selectTranslation).ABOUT_THIS_WEBSITE
  const [visitorsCounter, setVisitorsCounter] = React.useState<number | null>(null)

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/visitorsThisMonth`)
        setVisitorsCounter(Number(await response.text()))
      } catch(e) {
        setVisitorsCounter(NaN)
      }
    })()
  }, [])

  const handleOpenImage = (e: React.MouseEvent<HTMLImageElement>) => {
    window.open(e.currentTarget.src, '_blank')
  }

  return (
    <div className={styles.aboutSite}>
      <Card
        title={translation.HEADING}
        containerClassname={styles.leftCol}
      >
        <div className={styles.text}>
          <p dangerouslySetInnerHTML={{ __html: translation.TEXT }} />
          <ul>
            {translation.PREVIOUS_SITES.map((siteInfo, i) => (
              <li key={i}>
                <p dangerouslySetInnerHTML={{ __html: siteInfo }} />
                {i >= 3 && (
                  <div className='flex gap-2 [&>img]:rounded-lg [&>img]:h-20 flex-wrap [&>img]:cursor-zoom-in [&>img]:bg-[#eee] [&>img]:border-[#eee] [&>img]:border-solid'>
                    {i === 3 && (<>
                      <img src={site4thscreenshot1} onClick={handleOpenImage} />
                      <img src={site4thscreenshot2} onClick={handleOpenImage} />
                      <img src={site4thscreenshot3} onClick={handleOpenImage} />
                      <img src={site4thscreenshot4} onClick={handleOpenImage} />
                    </>)}
                    {i === 4 && (<>
                      <img src={site5thScreenshot1} onClick={handleOpenImage} />
                      <img src={site5thScreenshot2} onClick={handleOpenImage} />
                      <img src={site5thScreenshot3} onClick={handleOpenImage} />
                      <img src={site5thScreenshot4} onClick={handleOpenImage} />
                      <img src={site5thScreenshot5} onClick={handleOpenImage} />
                      <img src={site5thScreenshot6} onClick={handleOpenImage} />
                    </>)}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <p dangerouslySetInnerHTML={{ __html: translation.TEXT2 }} />
          {visitorsCounter !== null && <span className='font-bold text-sm [&,&_span]leading-tight'>
            <span>{translation.VISITORS_THIS_MONTH}: {String(visitorsCounter)}.</span> {
              visitorsCounter === 0 
                ? <span>{translation.ZERO_VISITORS}</span>
                : Number.isNaN(visitorsCounter)
                  ? <span>{translation.NAN_VISITORS}</span>
                  : Boolean(visitorsCounter <= 5) && 
                    <span>{translation.TOO_LOW_VISITORS.replace('%v', String(visitorsCounter))}</span>
            }
          </span>}
        </div>
      </Card>
      <Card
        containerClassname={styles.rightCol}
      >
        <div className={styles.img}>
          <img src={firstConceptArt} alt="" />
          <Skeleton variant='rectangular' />
        </div>
        <div className={styles.img}>
          <img src={blenderScreenshot} alt="" />
          <Skeleton variant='rectangular' />
        </div>
        <a href="https://github.com/VityaSchel/hlothdev">{translation.LINKS.GITHUB_SOURCES} <BiLinkExternal/></a>
      </Card>
    </div>
  )
}
