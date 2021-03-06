import React from 'react';

module.exports = React.createClass({
  displayName: 'SocialLinks',
  render() {
    const type = this.props.type;

    return (
      <div className="social-links">
        <blockquote className="tip">
          {`If you enjoyed this ${type} consider subscribing to the mailing list below or following `}
          <a href="https://twitter.com/survivejs">@survivejs</a> for occasional updates. There is also <a href="/atom.xml">RSS</a> available for old beards (no pun intended).</blockquote>
        <form action="//jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&amp;id=b853b8e786"
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input type="email"
                placeholder="Email"
                value="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}}>
              <input type="text"
                name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
                tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <input type="submit"
                className="btn button"
                style={{marginTop: '1em', marginBottom: '1em', lineHeight: '2em'}}
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});
