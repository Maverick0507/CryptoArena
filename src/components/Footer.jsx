import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023 
          <Link to="/">
            Crypto Lok Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <div className="socialIcons">
                    <a className="icon" href="https://www.linkedin.com/in/vivekpanchal2608/" target="_blank">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a> 
                    <a className="icon" href="https://leetcode.com/vivekpanchal/" target="_blank">
                        <span className="icon">
                            <SiLeetcode />
                        </span>
                    </a> 
                    <a className="icon" href="https://github.com/vivek-panchal" target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a> 
                    <a className="icon" href="https://www.instagram.com/vivekpaanchal/" target="_blank">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a> 
                   
                </div>
      </div>
  )
}

export default Footer