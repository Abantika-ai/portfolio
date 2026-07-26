/**
 * All portfolio copy lives here. Edit these values — the components
 * never need to change. Replace every placeholder (name, email,
 * links, project descriptions) with your own details.
 */

export const profile = {
  name: 'Abantika Ghosh',
  role: 'PhD Candidate in Experimental AstroParticle Physics',
  experiment: 'LZ (LUX-ZEPLIN)',
  tagline:
    'Searching for WIMP dark matter with a 7-tonne liquid-xenon time projection chamber, one mile underground at SURF.',
  location: 'Sanford Underground Research Facility · Lead, SD',
  email: 'aghosh2@albany.edu',
  links: {
    linkedin: 'https://www.linkedin.com/in/abantika-starstuff/',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export const about = {
  paragraphs: [
    "I'm a third-year PhD candidate working on the LZ experiment, a dual-phase xenon time projection chamber designed to detect the faint nuclear recoils a WIMP would leave behind if it collided with a xenon atom. LZ operates nearly a mile underground at the Sanford Underground Research Facility, shielded from the cosmic-ray background that would otherwise swamp the signal we're looking for.",
    "My work is on pulse-shape discrimination for fiducial and wall-background events: looking at S1 signal properties to discriminate wall events from genuine interactions in the fiducial volume. The ultimate goal is to expand the fiducial volume and increase LZ's sensitivity. Going forward, I plan to combine S1 and S2 signal properties and bring in machine-learning algorithms for the background classification.",
    'I completed my coursework and qualifying exams, and spent time learning how LZ works. Year three has been about turning that groundwork into an analysis I can defend.',
  ],
  focus: [
    'Fiducial/wall event discrimination from S1 light patterns',
    'Combining observables via CMA-ES & KDE-likelihood scoring',
    'Next: folding in S2 observables + a machine-learning classifier',
  ],
};

export const research = [
  {
    title: 'Wall-Event Discrimination from S1 Light Patterns',
    description:
      'Wall events — background scatters near the PTFE wall — get mis-reconstructed into the fiducial volume, slipping past standard position cuts. I built a discriminator from S1 light-pattern observables (light-weighted radius, outer-ring fraction, PMT hit multiplicity, and more), then combined the strongest ones with CMA-ES-optimized scoring and a KDE-based likelihood classifier. Goal: expand the usable fiducial volume without letting in more wall background.',
    tags: ['S1 Light Patterns', 'CMA-ES', 'KDE Likelihood', 'Python'],
  },
  {
    title: 'Detector Noise-Burst Exclusion Cuts',
    description:
      'Co-developed a data-quality veto (with Ewan) that flags anomalous single-photoelectron and S1 rate spikes in the WIMP-search dataset — noise bursts that would otherwise contaminate the analysis. Jointly optimized the rate threshold and time-binning to reject noise while keeping over 99% of good livetime. Merged into the collaboration’s core analysis software (ALPACA).',
    tags: ['Data Quality', 'ALPACA', 'Python'],
  },
];

export const timeline = [
  {
    year: 'Year 1',
    title: 'Coursework & Qualifying Prep',
    description:
      'Core graduate coursework in particle physics and statistics; joined the LZ collaboration and began shadowing calibration shifts.',
  },
  {
    year: 'Year 2',
    title: 'Quals, Hardware & First Analysis',
    description:
      'Passed the qualifying exam; contributed to PMT calibration and slow-controls monitoring; ran my first background-model studies.',
  },
  {
    year: 'Year 3 — Current',
    title: 'Thesis Analysis Underway',
    description:
      'Leading the low-energy calibration analysis and building out the profile-likelihood framework for the next WIMP-search result.',
    current: true,
  },
  {
    year: 'Year 4 (Planned)',
    title: 'Thesis Proposal & Results',
    description:
      'Defend thesis proposal; finalize analysis for publication; present results at collaboration meetings and conferences.',
  },
  {
    year: 'Year 5 (Planned)',
    title: 'Dissertation & Defense',
    description: 'Write and defend dissertation.',
  },
];

export const skills = [
  {
    category: 'Languages & Analysis',
    items: ['Python', 'C++', 'ROOT', 'NumPy / SciPy', 'Pandas'],
  },
  {
    category: 'Statistics & ML',
    items: ['Profile likelihood', 'RooFit / RooStats', 'scikit-learn', 'PyTorch', 'Bayesian inference'],
  },
  {
    category: 'Detector & Simulation',
    items: ['Geant4', 'NEST', 'DAQ systems', 'Signal processing', 'Calibration sources'],
  },
  {
    category: 'Tools & Practice',
    items: ['Git', 'HPC / Slurm', 'LaTeX', 'Jupyter', 'Collaboration software'],
  },
];

export const publications = [
  {
    type: 'Paper',
    title:
      'Searches for Light Dark Matter and Evidence of Coherent Elastic Neutrino-Nucleus Scattering of Solar Neutrinos with the LUX-ZEPLIN (LZ) Experiment',
    venue: 'Physical Review Letters (LZ Collaboration)',
    year: '2026',
    link: 'https://doi.org/10.1103/jvqf-njpj',
  },
];
