import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.png"
        width={50}
        height={60}
        quality={100}
        alt="Profile picture"
      />
    {author?.name && (
        <div className="sumary"><p>
         <strong><p>{author.name}</p></strong> {author?.summary || null}
          <div>
          <a href="https://www.github.com/rodscaloppe" target="_blank" rel="noopener noreferrer">
              <StaticImage
                className="github"
                src="../images/github-mark.png"
                width="20"
                height="20"
              />
           </a>
             <a href="mailto:rodolfoscaloppe@gmail.com" target="_blank" rel="noopener noreferrer">
              <StaticImage
                className="mail"
                src="../images/email-icon.png"
                width="20"
                height="20"
              />
          </a>
          </div>
        </p></div>
      )}

    </div>
  )
}

export default Bio
