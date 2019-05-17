# ➡  FEED FORWARD

Neural Networks 
(x(i), y(i) ) →  hW,b(x)
- supervised learning label training data problem
- W, b = parameters
- neuron 
 - input: x+1  →  hW,b(x) :output
 - x+1 : **intercept term** & channels *b* to create its output 
 - **+1** : bias unit
- sigmoid **activation function** [y = 0, 1] ▶️ 
- ( 𝒛 ) tanh activation function / hyperbolic tangent [-1,1]
  - compression of x-axis, re-scaled version of sigmoid function graph 
Machine Learning


Supervised Learning
- automatically learn features from labelled data
- 

Deep Learning



# ⬅  Backpropagation
- Bayesian Regularization Method variant (prevents over-fitting) > Gaussian Prior on parameters > MAP estimation  instead of maximum likelihood
- debugging 
- back checking States and Hidden layer parameters or weights? 
- a form from back checking?
- 𝐽 = loss function as classification and a weight(?)

### Weight Decay
- λ = weight decay parameter / 2 (mean squared)
 
- 𝐽 ( 𝑊, 𝒃 ) 
 - overall, cost function with weight decay term inside the function
 - a non-convex function
 - average sum-of-squares error
 - function helps prevent overfitting 

### Symmetry Breaking
- method where we want to ensure that if we use y = 0.1 for L1's x+1 doesn't return identical values (where similar outputs are similar due to function inputs ) 
- use y = 0.1, add greater speed "α ", and "∂" slope 
- ∂ = slope compared to the original slop
- ∂ = partial derivative function = __| = x & y step  == 2nd order Hessian (vector) Matrix scalar (spacetime) field (topography) == 1st order Jacobian Matrix (stretch, rotation, transform of topography)
 - 2/3D --> slope of Euclidean Tanh 
 - 3D --> ∂ = ∂𝒛 / ∂𝒙  ===  𝒛 = 𝒇(𝒙, 𝒚, ... )  := 
  - saddle > hyperbolic paraboloid
  - scalar field = temperature
  - vector fields = collection of arrows noting magnitude, direction, force, magnetic gravation
 - ∂ optiminaton algorithm example: Gibbs-Duhem equation ( thermodynamics)
 - ∂ seam craving algm for image resizing based on 'energy' from outter rows/columns low values
- gradient descent = updates ( 𝑊, 𝒃 ) values
- α =  alpha 

### Gradient Checking & Advanced Optimization
- epsilon as a small constant 
- faster algms than gradient descent:
  - L-BFGS algm
  - conjugate gradient


Loss Function
- L1
- L2

K-means
- Kleine Bottle?




PCA (Principal) 
Variational Autoencoders



# Autoencoders
- unsupervised algorithm 

Sparsity Parameter = 0.1 
- initalizer value of small random value of 0.1 (near zero) for feature output not taking all features to use when computing a representation?
- function that add constraints to the length of features requested to represent a model?
- a form of low-dimensionality rather than high-dimensionality

Batch Gradient Descent

m = n's from trained dataset?
Ln = layer to the nth
l = loss
h = hidden, values-unobserved nodes 
(W, b) = parameters
W ⁽ ˡ ⁾ ₍ 𝓲𝓳𝑗 ₎     (l)
ij 
𝒃 = bias value ▶️ usually doesn't get reguarized 
PCA = principal component analysis (statistical procedure), low-dimensional
orthogonal transformation = linear algebra timespace transformation
  - 2/3D Euclidean martix for rotational space



Source:
[What is the purpose of sparsity constraint in autoencoder?](https://is.gd/jZ1akM)


 - 𝒛 𝓏 𝔃  𝛼 𝛽 𝛾 𝛿 𝜀 𝜆