let publications: publication[]  = [
    
    {
        date: new Date(2024, 4, 1),
        title: "A semi-numerical algorithm for the homology lattice and periods of complex elliptic surfaces over the projective line",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0747717124000610",
        pdf: "https://arxiv.org/pdf/2401.05131.pdf",
        img_url: new URL("./../imgs/elliptic_surface.png", import.meta.url).toString(),
        abstract: "We provide an algorithm for computing an effective basis of homology of elliptic surfaces over the complex projective line on which integration of periods can be carried out. This allows the heuristic recovery of several algebraic invariants of the surface, notably the Néron-Severi lattice, the transcendental lattice, the Mordell-Weil group and the Mordell-Weil lattice. This algorithm comes with a SageMath implementation.",
        authors: [
            {firstname: "Eric", lastname: "Pichon-Pharabod"}
        ],
        status:"Published at Journal of Symbolic Computation"
    },
    {
        date: new Date(2024, 6, 9),
        title: "Estimating major merger rates and spin parameters ab initio via the clustering of critical events",
        url: "https://academic.oup.com/mnras/article/531/1/1385/7667923",
        pdf: "https://arxiv.org/pdf/2309.11558.pdf",
        img_url: new URL("./../imgs/critical_events.png", import.meta.url).toString(),
        abstract: "We build a model to predict from first principles the properties of major mergers. We predict these from the coalescence of peaks and saddle points in the vicinity of a given larger peak, as one increases smoothing scale in the initial linear density field as a proxy for cosmic time. To refine our results, we also ensure, using a suite of ∼400 power-law gaussian random fields smoothed at ∼30 different scales, that the relevant peaks and saddles are topologically connected: they should belong to a persistent pair before coalescence. Our model allows us to (a) compute the probability distribution function of the satellite-merger separation in Lagrangian space: they peak at three times the smoothing scale; (b) predict the distribution of the number of mergers as a function of peak rarity: halos typically undergo two major mergers (>1:10) per decade of mass growth; (c) recover that the typical spin brought by mergers: it is of the order of a few tens of percent.",
        authors: [
            {firstname: "Corentin", lastname: "Cadiou", homepage_url: "https://cphyc.github.io/"},
            {firstname: "Eric", lastname: "Pichon-Pharabod"},
            {firstname: "Christophe", lastname: "Pichon", homepage_url: "http://www2.iap.fr/users/pichon/"},
            {firstname: "Dmitri", lastname: "Pogosyan", homepage_url: "https://sites.ualberta.ca/~pogosyan/"}
        ],
        status:"Published at Monthly Notices of the Royal Astronomical Society (MNRAS)"
    },
    {
        date: new Date(2024, 4, 20),
        title: "Effective homology and periods of complex projective hypersurfaces",
        url: "https://www.ams.org/journals/mcom/0000-000-00/S0025-5718-2024-03947-9/",
        pdf: "https://arxiv.org/pdf/2306.05263.pdf",
        img_url: new URL("./../imgs/lefschetz_family.png", import.meta.url).toString(),
        abstract: "We provide an algorithm to compute an effective description of the homology of complex projective hypersurfaces relying on Picard-Lefschetz theory. Next, we use this description to compute high-precision numerical approximations of the periods of the hypersurface. This is an improvement over existing algorithms as this new method allows for the computation of periods of smooth quartic surfaces in an hour on a laptop, which could not be attained with previous methods. The general theory presented in this paper can be generalised to varieties other than just hypersurfaces, such as elliptic fibrations as showcased on an example coming from Feynman graphs. Our algorithm comes with a SageMath implementation. ",
        authors: [
            {firstname: "Eric", lastname: "Pichon-Pharabod"},
            {firstname: "Pierre", lastname: "Lairez", homepage_url: "https://mathexp.eu/lairez/"},
            {firstname: "Pierre", lastname: "Vanhove", homepage_url: "https://pierrevanhove.github.io/"}
        ],
        status: "Published in Mathematics of Computation"
    },
    {
        date: new Date(2024, 7, 10),
        title: "Motivic geometry of 2-loop Feynman integrals (Appendix)",
        url: "https://doi.org/10.1093/qmath/haae015",
        pdf: "https://arxiv.org/pdf/2302.14840.pdf",
        img_url: new URL("./../imgs/tardigrade.png", import.meta.url).toString(),
        abstract: "We study the geometry and Hodge theory of the cubic hypersurfaces attached to two-loop Feynman integrals for generic physical parameters. We show that the Hodge structure attached to planar two-loop Feynman graphs decomposes into mixed Tate pieces and the Hodge structures of families of hyperelliptic, elliptic, or rational curves depending on the space-time dimension. For two-loop graphs with a small number of edges, we give more precise results. In particular, we recover a result of Bloch that in the well-known double box example, there is an underlying family of elliptic curves, and we give a concrete description of these elliptic curves. \nWe argue that the motive for the non-planar two-loop tardigrade graph is that of a K3 surface of Picard number 11 and determine the generic lattice polarization. Lastly, we show that generic members of the ice cream cone family of graph hypersurfaces correspond to pairs of sunset Calabi-Yau varieties. ",
        authors: [
            {firstname: "Eric", lastname: "Pichon-Pharabod"},
            {firstname: "Charles", lastname: "Doran", homepage_url: "https://www.charlesdoran.net/"},
            {firstname: "Pierre", lastname: "Vanhove", homepage_url: "https://pierrevanhove.github.io/"},
            {firstname: "Andrew", lastname: "Harder", homepage_url: "https://sites.google.com/view/anh318"}
        ],
        status:"Published in Quarterly Journal of Mathematics"
    },
]

export default publications