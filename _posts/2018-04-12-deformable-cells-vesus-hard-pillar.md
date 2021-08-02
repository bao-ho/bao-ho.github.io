---
categories: Physics
---

The dynamics of deformable objects, in particular biological cells,
in microfludic channels isan interesting research topic,
from both theoretical and practical point of view.
In this project, I used COMSOL Multiphysics to simulate
the trajectories of deformable cells bumping into a hard pillar
inside a microfludic channel. Elevated applied pressures were tested
and both nonnucleated and nucleated cells were considered.

{% include youtubePlayer.html id="3Rq9j3PwkDk" %}
***Nonnucleated cells** (color of fluid: velocity, color of cell: von Mises stress)*

{% include youtubePlayer.html id="lZnFWAFEdNI" %}
***Nucleated cells** (color of fluid: velocity, color of cell: von Mises stress)*

In both cases, the cytoplasm is set to be hyperelastic with the bulk modulus of 1 MPa. The nucleus if present is also defined as a hyperelastic material with the bulk modulus of 5 MPa. Clearly, the presence of a nucleus makes the cell less deformed. At all pressure values and for both cell types, the cells were shown to be compressed against the pillar, gradually acclerate, and finally relax into original shape after passing the pillar. An interesting bouncing behavior can be observed at high pressure.