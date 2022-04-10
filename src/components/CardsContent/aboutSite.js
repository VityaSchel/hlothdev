import PropTypes from 'prop-types'
import Card from './Card'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import { BiLinkExternal } from 'react-icons/bi'
import firstConceptArt from 'assets/images/aboutSite/first-concept-art.jpeg'
import blenderScreenshot from 'assets/images/aboutSite/blender-screenshot.jpeg'
import Skeleton from '@mui/material/Skeleton'

AboutSite.propTypes = {
  translation: PropTypes.object,
}

function AboutSite(props) {
  const translation = props.translation.ABOUT_THIS_WEBSITE

  return (
    <div className={styles.aboutSite}>
      <Card
        title={translation.HEADING}
        containerStyle={styles.leftCol}
      >
        <div>
          <p>{translation.TEXT}</p>
          <ul>
            {translation.ABOUT_THIS_WEBSITE.PREVIOUS_SITES.map((siteInfo, i) => <li key={i}>{siteInfo}</li>)}
          </ul>
          <span>{translation.VISITORS_THIS_MONTH}: 0</span>
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
