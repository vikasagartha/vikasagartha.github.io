export const bio = {
  render: async (data) => `
    <h1>Bio</h1>
    <div>
      I studied computer science and physics and worked 9-5 in tech for a few years. Check my [resume][resume] for details.

      I was unsatisfied. I am a dedicated rock climber and musician. Providing for my family and making room for my passions is my priority, amassing wealth is not.

      ### Why you should hire me

      * Worked in the software industry since 2013
      * Contractor since 2015
      * Full stack experience. Capable engineer. Check my [skill-set][resume].

      ### Values

      Honesty. Professionalism. Efficiency. Diligence. Respect. Autodidacticism. Polymathism.

      ***

      Simply put, I get the job done. Check my [reviews][reviews].

      If you want a solid developer, with sane rates, get in touch.

      *vikasagartha@gmail.com*
    </div>
  `,
  postRender: async (data) => {
  }
}
