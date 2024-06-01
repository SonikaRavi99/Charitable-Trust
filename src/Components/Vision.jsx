import React from "react";
import "./Vission.css";
import Contact from "./Contact";

function Vission() {
  return (
    <div>

    <div className="VissionMain">
      <h1>About Us</h1>
      <div className="Belive">
        <h3>What We Belive</h3>
        <p>
          The Holy Scriptures as the revealed will of God, the all sufficient
          rule for faith and practice. The Holy Bible consisting of sixty-six
          (66) books including the Old and New Testament, is the inspired Word
          of God, a revelation from God to Man, concerning the will of God in
          all things necessary to our faith, conduct and salvation, so that
          whatever is not contained therein is not to be enjoined as an article
          of faith (Hebrews 4:12; 2 Peter 1:20-21; 2 Timothy 3:15-17).
        </p>
        <p>
          In one God, eternally existing in three persons, namely the Father,
          the Son and the Holy Ghost (Deuteronomy 6:4; Isaiah 43:10-11; Matthew
          28:19; Mark 12:29).
        </p>
        <p>
          That Jesus Christ is the only Begotten Son of the Father, conceived of
          the Holy Spirit, and born of virgin Mary (Isaiah 7:14; Matthew
          3:16-17)., that Jesus Christ died at the cross, and was buried and
          raised from the dead; that He ascended to heaven and is today at the
          right hand of the Father as our intercessor. In the Holy Ghost, the
          Lord and giver of life, who proceed from the Father and the Son; who
          with the Father and Son together is worshiped and glorified (John
          14:16-17).
        </p>
        <p>
          {" "}
          That man was created in the image and likeness of God, but fell by
          voluntary transgression and his only hope of redemption and salvation
          is in Jesus Christ; that all have sinned and come short of the glory
          of God, that repentance is commanded of God for all, and is necessary
          for forgiveness of sin; that salvation, new birth and justification
          are wrought by the grace of God, and faith in the Lord Jesus Christ
          and the renewing work of the Holy Ghost (Genesis 1:26-31; 3:1-7;
          Romans 5:12-21; 6:23; 10:13; Titus 2:11, 3:5-7).
        </p>
        <p>
          {" "}
          The inward evidence of salvation, new birth and justification to the
          believer is the direct witness of the Spirit, and the outward evidence
          to all men is a life of righteousness and holiness (Romans 8:16;
          12:1-2).
        </p>
        <p>
          {" "}
          In the ordinance of water baptism by immersion, in the name of the
          Father, and of the Son and of the Holy Ghost, for all who repent and
          believe Jesus Christ as Savior and Lord (Matthew 28:19; Acts 10:47;
          Romans 6:4).
        </p>
        <p>
          {" "}
          All believers are entitled to and earnestly seek the promise of the
          Father, the Baptism in the Holy Spirit according to the command of our
          Lord Jesus Christ; that the full consummation of the Baptism of the
          believers in the Holy Spirit is evidenced by the initial sign of
          speaking with other tongues as the Spirit give utterances and by the
          subsequent manifestation of the gifts and fruits of the Spirit (Luke
          24:49, Acts 1:4-6; 1:8; 2:4; 2:38; 10:44-46; 11:14-16; 15:7-9; 19:2-6;
          1 Corinthians 12:1-31).
        </p>
      </div>
      <div className="Vission">
        <h3>Our Vission</h3>
        <ul>
          <li>
            {" "}
            To reach the people of Karnataka with the transforming Word of God
            through witnessing, teaching & charitable works.
          </li>
          <li>To present Jesus Christ as the only saviour</li>
        </ul>
      </div>
      <div className="Mission">
        <h3>Our Mission</h3>
        <ul>
          <li>To take the gospel to the unreached parts of Karnataka</li>
          <li>To equip native missionaries</li>
          <li>To plant & nurture churches</li>
          <li>
            To engage in charitable and educational work for the holistic
            development of society
          </li>
          <li>
            To work towards the upliftment of marginalized & oppressed sections
            of society
          </li>
        </ul>
      </div>
      
      </div>
      <Contact />
    </div>
  );
}

export default Vission;
