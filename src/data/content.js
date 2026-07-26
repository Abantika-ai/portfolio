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
  email: 'jordan.reyes@example.edu',
  links: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://linkedin.com/in/your-handle',
    scholar: 'https://scholar.google.com/citations?user=your-id',
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
    'Low-background signal reconstruction',
    'Detector calibration & xenon purity',
    'Statistical inference for rare-event searches',
    'Background modeling & discrimination',
  ],
};

export const research = [
  {
    title: 'Low-Energy Nuclear Recoil Calibration',
    description:
      'Characterizing the detector’s S1/S2 response at low energies using DD neutron and tritium calibration sources, to pin down the signal model used in the WIMP search.',
    tags: ['Calibration', 'Xenon TPC', 'ROOT'],
  },
  {
    title: 'Background Discrimination with Machine Learning',
    description:
      'Developing gradient-boosted and neural discriminators to separate electronic-recoil backgrounds (radiogenic, solar neutrino) from the nuclear-recoil signal region.',
    tags: ['scikit-learn', 'PyTorch', 'Background Modeling'],
  },
  {
    title: 'Profile-Likelihood WIMP Search',
    description:
      'Building the profile-likelihood-ratio framework used to set exclusion limits on the WIMP-nucleon cross-section, propagating systematic uncertainties from calibration data.',
    tags: ['Statistics', 'RooFit', 'Python'],
  },
  {
    title: 'Xenon Purity & Slow Controls Monitoring',
    description:
      'Monitoring electron lifetime and detector conditions in near-real time, flagging drifts that would bias energy reconstruction before they reach the physics dataset.',
    tags: ['DAQ', 'Slow Controls', 'Data Quality'],
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
    title: 'First Dark Matter Search Results from the LZ Experiment',
    venue: 'Physical Review Letters (LZ Collaboration)',
    year: '2023',
    link: '#',
  },
  {
    type: 'Talk',
    title: 'Low-Energy Calibration Strategy for LZ',
    venue: 'APS April Meeting',
    year: '2024',
    link: '#',
  },
  {
    type: 'Poster',
    title: 'Background Discrimination via Gradient-Boosted Classifiers in Xenon TPCs',
    venue: 'TAUP Conference',
    year: '2024',
    link: '#',
  },
];
