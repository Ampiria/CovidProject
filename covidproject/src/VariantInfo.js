export const alpha = {name: "Alpha Variant",
             lineage: "B.1.1.7",
             mutations: ["N501Y: Helps the virus attach to human cells more easily (current vaccines likely to still be effective)", 
                         "P581H: Might increase the efficiency at which the virus creates new spike proteins", 
                         "H69/V70 and Y144/145 deletions: Alters the shape of the protein and may allow it to evade some antibodies"],
             info: "The Alpha variant features many spike protein substitutions that seem to combine to cause a 50% increase in transmissibility with the potential for increased severity. Virologists studying the immune response caused by the Alpha variant found that cells infected by the variant produce much less interferon which is a protein that activates many different immune defenses. Researchers found that Alpha infected cells produce 80 times more copies of the Orf9b gene than other variants, and Orf9b makes a protein that locks onto the Tom70 protein which is essential for the release of interferon. Cells will be able to shed the Orf9b proteins after about 12 hours which will then result in a delayed immune response that results in virus filled mucus being expelled from the mouth and nose which helps the virus spread more. ",
             sources: ["https://nytimes.com/interactive/2021/health/coronavirus-variant-tracker.html#alpha", 
                       "https://www.nytimes.com/2021/06/07/health/covid-alpha-uk-variant.html", 
                       "https://https://www.news-medical.net/news/20210630/Alpha-variant-mutations-help-SARS-CoV-2-overcome-evolutionary-weaknesses.aspx"]};

export const beta = {
  name: "Beta Variant",
  lineage: "B.1.351",
  mutations: ["N501Y: Helps the virus attach to human cells more easily (current vaccines likely to still be effective)",
              "K417N: Improves the virus' ability to attach to human cells",
              "E484K: Might allow the virus to evade some antibodies "],
  info: "The Beta variant, originating in South Africa, appears to be approximately 50% more infectious than the original virus strain. It features the E484K mutation, also known as the “Eek” mutation, which seems to allow the variant to avoid some antibodies. The AstraZeneca-Oxford vaccine seems to not be able to provide adequate protection against mild to moderate cases of the Beta variant as evidenced by clinical trials. The variant also seems to be deadlier than other variants. Those infected with the Beta variant were 25% more likely to develop severe disease, 50% more likely to require critical care, and 57% more likely to die over those infected with the Alpha variant. The variant is fading in areas it was previously the dominant strain; however, it shows more immune resistance than even the Delta variant, so experts urge it must still be regarded with care. ",
  sources: ["https://www.nytimes.com/interactive/2021/health/coronavirus-variant-tracker.html#beta", 
            "https://www.nytimes.com/2021/07/19/health/beta-variant-covid-19.html",
            "https://www.nature.com/articles/d41586-021-02177-3"]
};

export const gamma = {
  name: "Gamma Variant",
  lineage: "P.1",
  mutations: ["N501Y: Helps the virus attach to human cells more easily (current vaccines likely to still be effective)",
              "K417T: May improve the virus' ability to attach to human cells",
              "E484K: Might allow the virus to evade some antibodies"],
  info: "The Gamma variant, originating in Brazil, is closely related to the Beta variant lineage and shares similar concerns regarding its immune resistivity. 9 U.S. states have halted the distribution of monoclonal antibody treatments from Eli Lilly and Co due to their reduced effectiveness against the Gamma and Delta variants. The variant also is less susceptible to neutralization from post-infection/vaccination antibodies. Unvaccinated/not completely vaccinated people are vulnerable to this variant. This, combined with the reduced effectiveness of the monoclonal antibody treatment, raises major concerns about being able to help treat these vulnerable populations. This resistance is likely caused by the mutations changing the shape of the spike protein to a point where the immune system has trouble recognizing the virus. Pfizer and Moderna vaccines should remain very effective while the Johnson&Johnson vaccine may mostly/only be effective in helping people get out of the ICU. ",
  sources: ["nytimes.com/interactive/2021/health/coronavirus-variant-tracker.html#gamma",
            "https://www.cnn.com/2021/06/18/health/gamma-variant-spread/index.html"]
};

export const delta = {
  name: "Delta Variant",
  lineage: "B.1.167",
  mutations: ["L452R: May improve the virus' ability to spread",
              "E484Q: Might allow the virus to evade some antibodies"],
  info: "The Delta variant, originating in India, is currently the fastest spreading variant. The variant is spreading 50% faster than the Alpha variant which already spread 50% faster than the original strain. The virus’ high infectivity is thought to be due to its mutations that allow it to cling to human cells more easily, and children and adults under 50 are 2.5 times more likely to be infected by Delta. The variant also seems to be infectious earlier after exposure (4 days rather than 6 days) and for a longer period of time (18 days vs 13 days). The severity of the variant is still unknown. Studies in Scotland and Canada showed that the variant was about twice as likely to result in hospitalization, but other studies show that it does not increase severity at all. The variant is most deadly to the unvaccinated, and while the variant is slightly more resistant to the vaccines, vaccination is still the best way to combat the disease with the Pfizer vaccine being shown to remain extremely effective against severe Delta variant progression. ",
  sources: ["nytimes.com/interactive/2021/health/coronavirus-variant-tracker.html#delta",
            "https://www.ucsf.edu/news/2021/08/421171/how-dangerous-delta-variant-heres-what-science-says",
             "https://www.yalemedicine.org/news/5-things-to-know-delta-variant-covid"]
};

export const epsilon = {
  name: "Epsilon Variant",
  lineage: "B.1.427",
  mutations: ["L452R: May improve the virus' ability to spread"],
  info: "The Epsilon variant, originating in California, has mutations that reduce antibody effectiveness regardless of whether the antibodies were gained from vaccination or disease recovery. Like the Gamma variant, the epsilon variant is more resistant to monoclonal antibody treatment. However, this variant has mostly vanished from most places in the US, partially due to the other variants excelling both immune resistance and infectivity. ",
  sources: ["https://www.nytimes.com/interactive/2021/health/coronavirus-variant-tracker.html#epsilon",
            "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-4-different-types-of-covid-19-vaccines-heres-how-they-work/photostory/84229787.cms"]
}
