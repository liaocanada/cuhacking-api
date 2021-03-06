// Sorry, specializations that are commonly used out of the context of degrees
//    have been removed, like history, architecture, etc. When we get some machine
//    learning set up to detect what phrase is a specialization, we will add them back.

var specializations = { 
  'GENERAL AGRICULTURE': 0,
  'AGRICULTURE PRODUCTION AND MANAGEMENT': 0,
  'AGRICULTURAL ECONOMICS': 0,
  'ANIMAL SCIENCES': 0,
  'FOOD SCIENCE': 0,
  'PLANT SCIENCE AND AGRONOMY': 0,
  'SOIL SCIENCE': 0,
  'MISCELLANEOUS AGRICULTURE': 0,
  FORESTRY: 0,
  'NATURAL RESOURCES MANAGEMENT': 0,
  'FINE ARTS': 0,
  'DRAMA AND THEATER ARTS': 0,
  MUSIC: 0,
  'VISUAL AND PERFORMING ARTS': 0,
  'COMMERCIAL ART AND GRAPHIC DESIGN': 0,
  'FILM VIDEO AND PHOTOGRAPHIC ARTS': 0,
  'STUDIO ARTS': 0,
  'MISCELLANEOUS FINE ARTS': 0,
  'ENVIRONMENTAL SCIENCE': 0,
  BIOLOGY: 0,
  'BIOCHEMICAL SCIENCES': 0,
  BOTANY: 0,
  'MOLECULAR BIOLOGY': 0,
  ECOLOGY: 0,
  GENETICS: 0,
  MICROBIOLOGY: 0,
  PHARMACOLOGY: 0,
  PHYSIOLOGY: 0,
  ZOOLOGY: 0,
  NEUROSCIENCE: 0,
  'MISCELLANEOUS BIOLOGY': 0,
  'COGNITIVE SCIENCE AND BIOPSYCHOLOGY': 0,
  'GENERAL BUSINESS': 0,
  // ACCOUNTING: 0,
  'ACTUARIAL SCIENCE': 0,
  'BUSINESS MANAGEMENT AND ADMINISTRATION': 0,
  'OPERATIONS LOGISTICS AND E-COMMERCE': 0,
  'BUSINESS ECONOMICS': 0,
  'MARKETING AND MARKETING RESEARCH': 0,
  FINANCE: 0,
  'HUMAN RESOURCES AND PERSONNEL MANAGEMENT': 0,
  'INTERNATIONAL BUSINESS': 0,
  'HOSPITALITY MANAGEMENT': 0,
  'MANAGEMENT INFORMATION SYSTEMS AND STATISTICS': 0,
  'MISCELLANEOUS BUSINESS & MEDICAL ADMINISTRATION': 0,
  // COMMUNICATIONS: 0,
  JOURNALISM: 0,
  'MASS MEDIA': 0,
  'ADVERTISING AND PUBLIC RELATIONS': 0,
  'COMMUNICATION TECHNOLOGIES': 0,
  'COMPUTER AND INFORMATION SYSTEMS': 0,
  'COMPUTER PROGRAMMING AND DATA PROCESSING': 0,
  'COMPUTER SCIENCE': 0,
  'SOFTWARE ENGINEERING': 0,
  'INFORMATION SCIENCES': 0,
  'COMPUTER ADMINISTRATION MANAGEMENT AND SECURITY': 0,
  'COMPUTER NETWORKING AND TELECOMMUNICATIONS': 0,
  MATHEMATICS: 0,
  'APPLIED MATHEMATICS': 0,
  'STATISTICS AND DECISION SCIENCE': 0,
  'MATHEMATICS AND COMPUTER SCIENCE': 0,
  'GENERAL EDUCATION': 0,
  'EDUCATIONAL ADMINISTRATION AND SUPERVISION': 0,
  'SCHOOL STUDENT COUNSELING': 0,
  'ELEMENTARY EDUCATION': 0,
  'MATHEMATICS TEACHER EDUCATION': 0,
  'PHYSICAL AND HEALTH EDUCATION TEACHING': 0,
  'EARLY CHILDHOOD EDUCATION': 0,
  'SCIENCE AND COMPUTER TEACHER EDUCATION': 0,
  'SECONDARY TEACHER EDUCATION': 0,
  'SPECIAL NEEDS EDUCATION': 0,
  'SOCIAL SCIENCE OR HISTORY TEACHER EDUCATION': 0,
  'TEACHER EDUCATION: MULTIPLE LEVELS': 0,
  'LANGUAGE AND DRAMA EDUCATION': 0,
  'ART AND MUSIC EDUCATION': 0,
  'MISCELLANEOUS EDUCATION': 0,
  'LIBRARY SCIENCE': 0,
  // ARCHITECTURE: 0,
  'GENERAL ENGINEERING': 0,
  'AEROSPACE ENGINEERING': 0,
  'BIOLOGICAL ENGINEERING': 0,
  'ARCHITECTURAL ENGINEERING': 0,
  'BIOMEDICAL ENGINEERING': 0,
  'CHEMICAL ENGINEERING': 0,
  'CIVIL ENGINEERING': 0,
  'COMPUTER ENGINEERING': 0,
  'ELECTRICAL ENGINEERING': 0,
  'ENGINEERING MECHANICS PHYSICS AND SCIENCE': 0,
  'ENVIRONMENTAL ENGINEERING': 0,
  'GEOLOGICAL AND GEOPHYSICAL ENGINEERING': 0,
  'INDUSTRIAL AND MANUFACTURING ENGINEERING': 0,
  'MATERIALS ENGINEERING AND MATERIALS SCIENCE': 0,
  'MECHANICAL ENGINEERING': 0,
  'METALLURGICAL ENGINEERING': 0,
  'MINING AND MINERAL ENGINEERING': 0,
  'NAVAL ARCHITECTURE AND MARINE ENGINEERING': 0,
  'NUCLEAR ENGINEERING': 0,
  'PETROLEUM ENGINEERING': 0,
  'MISCELLANEOUS ENGINEERING': 0,
  'ENGINEERING TECHNOLOGIES': 0,
  'ENGINEERING AND INDUSTRIAL MANAGEMENT': 0,
  'ELECTRICAL ENGINEERING TECHNOLOGY': 0,
  'INDUSTRIAL PRODUCTION TECHNOLOGIES': 0,
  'MECHANICAL ENGINEERING RELATED TECHNOLOGIES': 0,
  'MISCELLANEOUS ENGINEERING TECHNOLOGIES': 0,
  'MATERIALS SCIENCE': 0,
  'NUTRITION SCIENCES': 0,
  'GENERAL MEDICAL AND HEALTH SERVICES': 0,
  'COMMUNICATION DISORDERS SCIENCES AND SERVICES': 0,
  'HEALTH AND MEDICAL ADMINISTRATIVE SERVICES': 0,
  'MEDICAL ASSISTING SERVICES': 0,
  'MEDICAL TECHNOLOGIES TECHNICIANS': 0,
  'HEALTH AND MEDICAL PREPARATORY PROGRAMS': 0,
  // NURSING: 0,
  'PHARMACY PHARMACEUTICAL SCIENCES AND ADMINISTRATION': 0,
  'TREATMENT THERAPY PROFESSIONS': 0,
  'COMMUNITY AND PUBLIC HEALTH': 0,
  'MISCELLANEOUS HEALTH MEDICAL PROFESSIONS': 0,
  'AREA ETHNIC AND CIVILIZATION STUDIES': 0,
  'LINGUISTICS AND COMPARATIVE LANGUAGE AND LITERATURE': 0,
  'FRENCH GERMAN LATIN AND OTHER COMMON FOREIGN LANGUAGE STUDIES': 0,
  'OTHER FOREIGN LANGUAGES': 0,
  'ENGLISH LANGUAGE AND LITERATURE': 0,
  'COMPOSITION AND RHETORIC': 0,
  'LIBERAL ARTS': 0,
  HUMANITIES: 0,
  'INTERCULTURAL AND INTERNATIONAL STUDIES': 0,
  'PHILOSOPHY AND RELIGIOUS STUDIES': 0,
  'THEOLOGY AND RELIGIOUS VOCATIONS': 0,
  'ANTHROPOLOGY AND ARCHEOLOGY': 0,
  'ART HISTORY AND CRITICISM': 0,
  // HISTORY: 0,
  'UNITED STATES HISTORY': 0,
  'COSMETOLOGY SERVICES AND CULINARY ARTS': 0,
  'FAMILY AND CONSUMER SCIENCES': 0,
  'MILITARY TECHNOLOGIES': 0,
  'PHYSICAL FITNESS PARKS RECREATION AND LEISURE': 0,
  'CONSTRUCTION SERVICES': 0,
  'ELECTRICAL, MECHANICAL, AND PRECISION TECHNOLOGIES AND PRODUCTION': 0,
  'TRANSPORTATION SCIENCES AND TECHNOLOGIES': 0,
  'MULTI/INTERDISCIPLINARY STUDIES': 0,
  'COURT REPORTING': 0,
  'PRE-LAW AND LEGAL STUDIES': 0,
  'CRIMINAL JUSTICE AND FIRE PROTECTION': 0,
  'PUBLIC ADMINISTRATION': 0,
  'PUBLIC POLICY': 0,
  // 'N/A (less than bachelor\'s degree)': 0,
  'PHYSICAL SCIENCES': 0,
  'ASTRONOMY AND ASTROPHYSICS': 0,
  'ATMOSPHERIC SCIENCES AND METEOROLOGY': 0,
  CHEMISTRY: 0,
  'GEOLOGY AND EARTH SCIENCE': 0,
  GEOSCIENCES: 0,
  OCEANOGRAPHY: 0,
  PHYSICS: 0,
  'MULTI-DISCIPLINARY OR GENERAL SCIENCE': 0,
  'NUCLEAR, INDUSTRIAL RADIOLOGY, AND BIOLOGICAL TECHNOLOGIES': 0,
  PSYCHOLOGY: 0,
  'EDUCATIONAL PSYCHOLOGY': 0,
  'CLINICAL PSYCHOLOGY': 0,
  'COUNSELING PSYCHOLOGY': 0,
  'INDUSTRIAL AND ORGANIZATIONAL PSYCHOLOGY': 0,
  'SOCIAL PSYCHOLOGY': 0,
  'MISCELLANEOUS PSYCHOLOGY': 0,
  'HUMAN SERVICES AND COMMUNITY ORGANIZATION': 0,
  'SOCIAL WORK': 0,
  'INTERDISCIPLINARY SOCIAL SCIENCES': 0,
  'GENERAL SOCIAL SCIENCES': 0,
  ECONOMICS: 0,
  CRIMINOLOGY: 0,
  GEOGRAPHY: 0,
  'INTERNATIONAL RELATIONS': 0,
  'POLITICAL SCIENCE AND GOVERNMENT': 0,
  SOCIOLOGY: 0,
  'MISCELLANEOUS SOCIAL SCIENCES': 0 
};

  module.exports = specializations;