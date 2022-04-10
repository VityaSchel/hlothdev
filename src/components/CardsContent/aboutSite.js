import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { BiLinkExternal } from 'react-icons/bi'
import firstConceptArt from 'assets/images/aboutSite/first-concept-art.jpeg'
import blenderScreenshot from 'assets/images/aboutSite/blender-screenshot.jpeg'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props) {
  const translation = props.translation.ABOUT_THIS_WEBSITE
  const [visitorsCounter, setVisitorsCounter] = React.useState(null)

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/visitorsThisMonth`)
      setVisitorsCounter(Number(await response.text()))
    })()
  }, [])

  return (
    <div className={styles.aboutSite}>
      <Card
        title={translation.HEADING}
        containerStyle={styles.leftCol}
      >
        <div className={styles.text}>
          <p>{translation.TEXT}</p>
          <ul>
            {translation.PREVIOUS_SITES.map((siteInfo, i) => <li key={i}>{siteInfo}</li>)}
          </ul>
          {visitorsCounter !== null && <Typography variant='caption' className={styles.counter}>
            <span>{translation.VISITORS_THIS_MONTH}: {visitorsCounter}.</span> {
              visitorsCounter === 0 
                ? <span>{translation.ZERO_VISITORS}</span>
                : Boolean(visitorsCounter <= 5) && <span>{translation.TOO_LOW_VISITORS.replace('%v', visitorsCounter)}</span>
            }
          </Typography>}
        </div>
      </Card>
      <Card
        containerStyle={styles.rightCol}
      >
        <div className={styles.img}>
          <img src={firstConceptArt} alt="" />
          <Skeleton variant='rectangular' />
        </div>
        <div className={styles.img}>
          <img src={blenderScreenshot} alt="" />
          <Skeleton variant='rectangular' />
        </div>
        <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODcxNzQ1NzUxNjI2MjM4">{translation.LINKS.INSTAGRAM_HIGHLIGHTS} <BiLinkExternal/></a>
        <a href="https://github.com/VityaSchel/hlothdev">{translation.LINKS.GITHUB_SOURCES} <BiLinkExternal/></a>
      </Card>
    </div>
  )
}

export default connect(state => ({ translation: state.translation }))(AboutSite)
