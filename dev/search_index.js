var documenterSearchIndex = {"docs":
[{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#Machine-Learning-main-ideas","page":"0301-MachineLearningMainIdeas","title":"0301 - Machine Learning main ideas","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"We start our journey on Machine Learning from the perceptron algorithm. This is a linear classifier that historically has been a bit a pioneer in ML algorithms. We start from it due to its simplicity, and it will be the only algorithm that we will study in detail.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#A-linear-classifier-for-the-binary-classification-problem","page":"0301-MachineLearningMainIdeas","title":"A linear classifier for the binary classification problem","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"So, which is our problem? We are in the realm of supervised machine learning as we defined in the kick-off lesson, where the objective is to make some predictions over a component of the dataset (an unknown characteristic, or some future event...) that we call \"label\" based on other known characteristics of the data (that we call \"features\"), and we can \"learn\" this relation by \"supervising\" the algorithm, that is providing the algorithm with data from which we know both the features and the associated labels (across this course I'll often use \"X\" as a shortcut for the former, and \"Y\" for the later). More specifically we are in the realm of classification, where the labels are given a finite set of possible values, and we start from binary labels, where the values can only be -1 or +1 (it is easy then to use this binary classifier as the base for a multiclass classifier, e.g. using a so-called one-vs-all strategy). The features are numerical, and possibly highly multi-dimensional.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"The Perceptron algorithm is a method to find the parameters of a linear classifier that minimise classification errors. These classifiers will be nothing else than a hyperplane (the generalisation of the concept of \"plane\" on multiple dimensions) that divides our space into two parts, with the hyperplane itself forming the boundaries between the two parts, and we will use this hyperplane to discriminate all points on one side of it v.s. all points on the other side. For example, the following figure shows a hyperplane in 2D (i.e. a line) used to classify some points:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: A linear classifier in 2D)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"All points in the direction of the arrow are \"positive\", all points in the opposite direction are negative. From the figure we can deduce a few things in that example:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"the current classifier (as drawn) is NOT classifying all points correctly, ie it makes \"errors\"\nthe points are however linearly separable\nit would be enough to \"rotate\" a bit the classifier clockward to get the classifier making no more errors","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"The perceptron algorithm is indeed an online algorithm (that is, that is updated as data is processed..) to \"rotate\" the classifier until it minimises the classification errors. For simplicity, we will work with classifiers passing through the origin, but we don't lose in generality as we can always think of the constant term as another dimension where the feature data is all filled with ones.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Our first step is to \"decide\" how to define the classifier, and how to check if it classifies a record correctly or not. Concerning the former, we define the boundary given by the parameters theta as the set of points x for which x cdot theta = 0 (the inner product is equal to zero). It results that all points x for which $ x \\cdot \\theta > 0$ are classified positively, and similarly all points x for which $ x \\cdot \\theta < 0$ are classified negatively. For a given record, we can now check if this classifier matches the label of the record (-1 or +1). In analytical terms, we have a classification error of the (linear) classifier theta for the record n when  y^n * (theta cdot x^n)) leq 0. The overall error rate of the classifier will then be the sum of the errors for each record divided by the number of records N:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"epsilon_n(theta) = sum_n=1^N frac mathbb1  y^n * (theta cdot x^n ) leq 0  n","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"where the one at the numerator is an indicator function. And note that we consider a point exactly on the boundary still as a classification error.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#Supervised-learning","page":"0301-MachineLearningMainIdeas","title":"Supervised learning","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Before we can turn to the problem of actually finding a linear classifier that agrees with the data to the extent possible, that is looking at the specific perceptron algorithm, we need to develop a method to generally deal with \"learning algorithms\" in the context of supervised learning, where - like here - we are given a set of both the features (the \"X\" matrix) and the associated labels (the \"Y\" vector - or sometimes matrix).","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Let's then define as the algorithm's parameters those parameters that are learned by an algorithm by processing the (X,y) data that we provide to it to learn its relations. Often an algorithm has also so-called hyperparameters. These are additional parameters that remain constant during the learning (also called training) step, while still affecting the performances of the algorithm. For example, the number of neurons in a neural network layer, or the number of individual decision trees in the random forest algorithm. Or, for many algorithms (including perceptron) how long should the learning step continue (this can take different forms depending on the algorithm).","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Hyperparameters play a fundamental role in the trade-off between specialisation and generalisation. The objective of the training is not indeed to learn a relation between the given X and the given Y, but rather to learn from the provided data the general relationship between X and Y for all the populations from which X and Y have been sampled. And hyperparameters should be \"set\" to the levels that maximise this objective, not the minimisation of errors in the data used to train the algorithm. If we use too many neurons, if we train too much,.. we would learn the specific relation between X and Y in the training data. However, this reflects the specific data provided and not the general population. In statistical terminology, we would overfit our model, or in other words, generate too much variance in the trained parameter of our model, that would depend too much on the specific training data (i.e. different training data would lead to very different learned parameters). On the opposite, if our model is too simple or receives too little training, we will have too much bias and not learn the relationship sufficiently. Techniques that allow an algorithm to better generalise, at the expense of better performances over the training data, are called \"regularisation\".","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"How can we choose the hyperparameters that minimise the bias-variance trade-off ? We put no assumptions on the data except that they all come from the same population. And the idea is to use the data itself to \"evaluate\" the generality of our model. We randomly split our dataset into three subsets:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"The training set is the one used to actually \"train\" the algorithm to learn the relation between the given X and the given y, provided a certain set of hyperparameters, that is to find the parameters than minimise the error made by the algorithm\nthe validation set is used to evaluate the results of our trained algorithm on data that has not been used by the algorithm to train the parameters, that is to find the hyperparameters that allow for the best generalisation\nfinally the test set is used to judge the overall performances of the algorithm when it is used with the \"best\" hyperparameter (we can't use the validation set for this, as the hyperparameters are \"fitted\" based on it).","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: Train, validation and test set)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"In practice, we have various ways to look for the \"best hyperparameters\".. grid search over the hyperparameters space, random search, gradient-based methods... In all cases, we run the algorithm under the training set, and we evaluate it under the validation set until we find the \"best\" hyperparameter set. At this point, with the \"best\" hyperparameters we train one last time the algorithm using the training set and we evaluate it under the test set.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#K-folds-cross-validation","page":"0301-MachineLearningMainIdeas","title":"K-folds cross validation","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Note that training and validation sets don't need to be the same sample across the whole process. Indeed a common technique is the so-called K-folds cross-validation:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: 5-folds CrossValidation)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Here we first randomly divide our whole dataset in a train/validation set and in the test set. For each possible hyperparameter set, we randomly partition the train/validation test in K sets. We use K-1 of them for training and the remaining one for computing the out-of-sample score of the model. We do that (keeping the same hyperparameters and the same partition) for all the different K subsets and we average the performances of the model with that given hyperparameters. We then select the \"best\" hyperparameters and we run the final training on the train/validation set and evaluation on the test set.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#The-perceptron-algorithm","page":"0301-MachineLearningMainIdeas","title":"The perceptron algorithm","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"We can now start our analysis of the Perceptron algorithm.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"We start with the parameters of the hyperplane all zeros theta = 0\nWe check if, with this parameter, the classifier makes an error\nIf so, we progressively update the classifier using as the update function  theta^n = theta^n - 1 + y^n * x^i.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"As we start with theta^0 = beginbmatrix00endbmatrix, the first attempt will always lead to an error and to a first \"update\" that will be theta^1 = beginbmatrix00endbmatrix + y^1 * beginbmatrixx^1_d1x^1_d2endbmatrix.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Let's make an exaple in 2 dimensions, with two points x^1 = beginbmatrix24endbmatrix and x^2 = beginbmatrix-61endbmatrix, both with negative labels.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"After being confronted with the first point, the classifier theta^0 undergos its first update to become theta^1 = beginbmatrix00endbmatrix + -1 * beginbmatrix24endbmatrix = beginbmatrix-2-4endbmatrix. Let's continue with the second point, x^(2) = beginbmatrix-61endbmatrix. Does theta^1 make an error in classifying x^2 ? We have:  y^(2) * theta^1 cdot x^(2) = -1 * beginbmatrix-2-4endbmatrix beginbmatrix-61endbmatrix = -8, so yes, we have another classification error. We hence run a second update to obtain  theta^2 = beginbmatrix-2-4endbmatrix + -1 * beginbmatrix-61endbmatrix = beginbmatrix4-5endbmatrix. I let you see geometrically that this classifier correctly classify the two points:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: Perceptron example over 2 points)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"More in general, we run the perceptron algorithm over the whole training set, starting from the 0 parameter vector and then going over all the training examples. And if the n-th example is a mistake, then we perform that update that we just discussed.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"So we moved the parameters in the right direction, based on an individual update. However, since the different training examples might update the parameters in different directions, the later updates might also \"undo\" some of the earlier updates, and some of the earlier examples would no longer be correctly classified. In other words, there may be cases where the perceptron algorithm needs to go over the training set multiple times before a separable solution is found (I let you try as exercise what would happen if the second point is +1-2 instead of -6+1, still with negative label).","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"So we have to go through the training set here multiple times. In the jargon of machine learning, we call epoch each time an algorithm goes through the whole training set, either in order or selecting at random. On each record, we look at whether the current classify makes a mistake and eventually perform a simple update.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"function perceptron displaystyle left(big  (x^(n) y^(n)) n=1Nbig   epochs right):\ninitialize theta =0 (vector);\nfor t=1epochs do\nfor n=1N do\nif y^(n)(theta cdot x^(n)) leq 0 then\nupdate theta = theta + y^(n)x^(n)\nreturn theta","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"So the perceptron algorithm takes two parameters: the training set of data (pairs feature vectors => label) and the epochs parameter that tells how many times going over the training set.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"For a sufficiently large number of epochs, if there exists a linear classifier through the origin that correctly classifies the training samples (i.e. the training set is linearly separable), this simple algorithm actually will find a solution to that problem. Typically, there are many solutions, but the algorithm will find one. And note that the one found is not, in general, the \"optimal\" one, where the points are \"best\" separated, just one where the points are separated.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#Support-Vector-Machines:-\"better\"-linear-classifiers","page":"0301-MachineLearningMainIdeas","title":"Support Vector Machines: \"better\" linear classifiers","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"While the Perceptron algorithm finds one possible classifier, it is clear that this may not be the \"best\" one. See the following figure:","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: Different linear classifiers over the same dataset)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Linear classifiers do generalise relatively well and the epochs parameter could be used as a form of regularisation. Still, we could end up with a perceptron classifier like in figure (a), very dependent on noisy data and that doesn't generalise well. Support Vector Machines (SVM, which we will not develop further in this course except in this small discussion) are linear classifiers that try to maximise the boundary with the classified data. So here we enter the realm of \"optimisation\", usually achieved employing a gradient-based approach that we'll see when discussing neural networks: it is no longer indifferent one classifier that separates the data from another, but SVM (should) retrieve the classifier that is more \"far away\" from the two datasets, on both the directions (figure (b)). The second important characteristic of SVM is that this optimisation can be \"adjusted\" to consider not only the points that lie closest to the decision surface (the \"support vectors\", from which the name..) but rather to give importance to the points that are farther away from the boundary. This adjustment takes the form of a regularisation parameter that can try to optimize with the cross-validation technique above. So, in the figure example, we intuitively see that the third classifier ( figure (c) ) would be the best for our dataset, it will better match with the nature of our data, even if it would make some classification mistakes, and we can steer an SVM algorithm toward the one depicted on figure (c) by increasing its regularisation parameter.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html#Using-linear-classifiers-for-non-linear-classification","page":"0301-MachineLearningMainIdeas","title":"Using linear classifiers for non-linear classification","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"Often the relationship between the X and the Y is not linear in nature, and even employing the best linear classifier would result in significant classification errors (same for regressions). The \"good news\" is that we can easily engineer our data performing non-linear transformation over it and still using a linear classifier.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"For example in the left diagram in the figure below, the three points are not separable in one dimension:  ","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"(Image: Inseparable points becoming separable in higher dimensions)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"However, we can \"engineer\" our dataset by creating a new dimension that is the square of our original dimension (diagram on the right): the points are now clearly separable by a linear classifier !","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0301-MachineLearningMainIdeas.html","page":"0301-MachineLearningMainIdeas","title":"0301-MachineLearningMainIdeas","text":"The \"bad news\" is that this engineering is not \"learned\" by the algorithm, but it is something we still do on a case-by-case, using our expertise of the specific problem on hand.  This is the main difference between linear algorithms used together with feature transformation and more \"modern\" non-linear algorithms where the non-linearity is learned from the data itself, like in trees-based approaches and neural networks. ","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"EditURL = \"https://github.com/sylvaticus/IntroSPMLJuliaCourse/blob/main/lessonsSources/03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.jl\"","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"################################################################################\n###  Introduction to Scientific Programming and Machine Learning with Julia  ###\n###                                                                          ###\n### Run each script on a new clean Julia session                             ###\n### GitHub: https://github.com/sylvaticus/IntroSPMLJuliaCourse               ###\n### Licence (apply to all material of the course: scripts, videos, quizes,..)###\n### Creative Commons By Attribution (CC BY 4.0), Antonello Lobianco          ###\n################################################################################","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#The-Perceptron-algorithm-for-linear-classification","page":"0302-perceptron","title":"0302 - The Perceptron algorithm for linear classification","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#Some-stuff-to-set-up-the-environment..","page":"0302-perceptron","title":"Some stuff to set-up the environment..","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"cd(@__DIR__)\nusing Pkg\nPkg.activate(\".\")","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"If using a Julia version different than 1.7 please uncomment and run the following line (reproductibility guarantee will hower be lost) Pkg.resolve()","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"Pkg.instantiate()\nusing Random\nRandom.seed!(123)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#Perceptron-elementary-operations","page":"0302-perceptron","title":"Perceptron elementary operations","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"using StatsPlots\nfunction plot2DClassifierWithData(X,y,θ;d1=1,d2=2,origin=false)\n    (nR,nD) = size(X)\n    colors = [y == -1 ? \"red\" : \"green\" for y in y]\n    labels = [y == -1 ? \"-1\" : \"+1\" for y in y]\n    minD1,maxD1 = extrema(X[:,d1])\n    minD2,maxD2 = extrema(X[:,d2])\n    myplot = scatter(X[:,d1],X[:,d2], colour=colors, title=\"Linear classifier in 2D\",xlabel=\"Dimx: $d1\", ylabel=\"Dimy: $d2\", group=labels)\n    xclassifier = minD1:0.01:maxD1\n    constTerm = 0.0\n    if !origin\n        d1 += 1\n        d2 += 1\n        constTerm = -θ[1]/θ[d2]\n    end\n    d2Class(x) = constTerm -x * θ[d1]/θ[d2]\n    if θ[d2] == 0\n        vline!([0], color= \"blue\",label=\"\",linewidth=5)\n    else\n        plot!(d2Class,min(θ[d1],minD1),max(maxD1,θ[d1]), color= \"blue\",label=\"\",linewidth=5)\n    end\n    plot!([0,θ[d1]],[0,θ[d2]],arrow=true,color=:black,linewidth=2,label=\"\")\n    display(myplot)\nend\nisClassificationError(θ,y,x) =  y * (θ' * x) <= eps()\nperceptronUpdate(θ,y,x)      = return θ .+ y .* x\n\n\nX = [ 2 4\n     -6 1]\ny = [-1,-1]\nθ₀ = [0,0]\n\nθ = θ₀\n\n\nϵ = isClassificationError(θ,y[1],X[1,:])\nθ = perceptronUpdate(θ,y[1],X[1,:])\nplot2DClassifierWithData(X,y,θ,origin=true)\nϵ = isClassificationError(θ,y[1],X[1,:])\nϵ = isClassificationError(θ,y[2],X[2,:])\nθ = perceptronUpdate(θ,y[2],X[2,:])\nplot2DClassifierWithData(X,y,θ,origin=true)\nϵ = isClassificationError(θ,y[2],X[2,:])\nϵ = isClassificationError(θ,y[1],X[1,:])\n\nX = [ 2 4\n     1 -2]\nθ = θ₀\n\nϵ = isClassificationError(θ,y[1],X[1,:])\nθ = perceptronUpdate(θ,y[1],X[1,:])\nplot2DClassifierWithData(X,y,θ, origin=true)\nϵ = isClassificationError(θ,y[1],X[1,:])\nϵ = isClassificationError(θ,y[2],X[2,:])\nθ = perceptronUpdate(θ,y[2],X[2,:])\nplot2DClassifierWithData(X,y,θ, origin=true)\nϵ = isClassificationError(θ,y[1],X[1,:])\nϵ = isClassificationError(θ,y[2],X[2,:])\nθ = perceptronUpdate(θ,y[2],X[2,:])\nplot2DClassifierWithData(X,y,θ,origin=true)\nϵ = isClassificationError(θ,y[1],X[1,:])\nϵ = isClassificationError(θ,y[2],X[2,:])\nθ\n\nX = [ 2 4\n     -2 2]\ny = [-1,1]\nθ = θ₀\nϵ = isClassificationError(θ,y[1],X[1,:])\nθ = perceptronUpdate(θ,y[1],X[1,:])\nplot2DClassifierWithData(X,y,θ, origin=true)\nϵ = isClassificationError(θ,y[2],X[2,:])\nθ = perceptronUpdate(θ,y[2],X[2,:])\nplot2DClassifierWithData(X,y,θ,origin=true)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#The-complete-algorithm","page":"0302-perceptron","title":"The complete algorithm","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"function perceptronOrigin(X,y,epochs=1;verbose=false)\n    (nR,nD) = size(X)\n    local θ = zeros(nD)\n    for t in 1:epochs\n        for n in 1:nR\n            if verbose\n                println(\"$n: X[n,:] \\t θ: $θ\")\n            end\n            if isClassificationError(θ,y[n],X[n,:])\n                θ = perceptronUpdate(θ,y[n],X[n,:])\n                if verbose\n                    println(\"**update! New theta: $θ\")\n                end\n            end\n        end\n        if verbose\n            plot2DClassifierWithData(X,y,θ, origin=true)\n        end\n    end\n    return θ\nend\nθopt =  perceptronOrigin(X,y,verbose=true)\n\n\nusing BetaML, DelimitedFiles\nbaseDir          = joinpath(dirname(pathof(BetaML)),\"..\",\"test\",\"data\")\nperceptronData   = readdlm(joinpath(dirname(pathof(BetaML)),\"..\",\"test\",\"data\",\"binary2DData.csv\"),'\\t')\n\nnR = size(perceptronData,1)\n\nidx = shuffle(1:nR)\nperceptronData = perceptronData[idx,:]\nX                = copy(perceptronData[:,[2,3]])\ny                = convert(Array{Int64,1},copy(perceptronData[:,1]))\nθopt             = perceptronOrigin(X,y,verbose=true)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#A-better-organisation","page":"0302-perceptron","title":"A better organisation","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"Now we rewrite the perceptron algorithm setting all the parameters in a structure and using what could be a generic interface for any supervised model. This is the approach used by most ML libraries. We will see how to measure the classification error and as we are here we add the constant term with the constant addition to the data trick (there are better ways...)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"abstract type SupervisedModel end\nabstract type TrainingOptions end\n\nmutable struct Perceptron <: SupervisedModel\n    θ::Vector{Float64}\nend\n\nmutable struct PerceptronTrainingOptions <: TrainingOptions\n    epochs::Int64\n    verbose::Bool\n    shuffle::Bool\n    function PerceptronTrainingOptions(;epochs=1,verbose=false,shuffle=false)\n        return new(epochs,verbose,shuffle)\n    end\nend\n\n\nfunction predict(model::Perceptron,x::AbstractVector)\n    x = vcat(1.0,x)\n    x' * model.θ > eps() ? (return 1) : (return -1)\nend\n\nfunction predict(model::Perceptron,X::AbstractMatrix)\n    return [predict(model,r) for r in eachrow(X)]\nend\n\n\nfunction update!(model::Perceptron,X::Vector,y)\n    X       = vcat(1.0,X)\n    model.θ = model.θ .+ y .* X\n    return model.θ\nend\n\nfunction train!(model::Perceptron,X,y,ops=PerceptronTrainingOptions()::TrainingOptions)\n    epochs  = ops.epochs\n    verbose = ops.verbose\n    (nR,nD) = size(X)\n    nD += 1\n    for t in 1:epochs\n        errors = 0\n        if ops.shuffle\n          idx = shuffle(1:nR)\n          X = X[idx,:]\n          y = y[idx]\n        end\n        for n in 1:nR\n            if verbose\n                println(\"$n: X[n,:] \\t θ: $(model.θ)\")\n            end\n            if  predict(model,X[n,:]) != y[n]\n                errors += 1\n                θ = update!(model,X[n,:],y[n])\n                if verbose\n                    println(\"**update! New theta: $(model.θ)\")\n                end\n            end\n        end\n        if verbose\n            println(\"Epoch $t errors: $errors\")\n            plot2DClassifierWithData(X,y,model.θ)\n        end\n    end\n    return model.θ\nend","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#Testing-the-PErceptron-algorithm","page":"0302-perceptron","title":"Testing the PErceptron algorithm","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"m   = Perceptron(zeros(size(X,2)+1))\nops = PerceptronTrainingOptions(verbose=true)\ntrain!(m,X,y,ops)\nŷ = predict(m,X)\ninSampleAccuracy = sum(y .== ŷ)/length(y)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"Let's see if shuffling and increasing epochs we improve the accuracy....","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"ops = PerceptronTrainingOptions(verbose=true,epochs=5,shuffle=true)\nm   = Perceptron(zeros(size(X,2)+1))\ntrain!(m,X,y,ops)\nŷ = predict(m,X)\ninSampleAccuracy = sum(y .== ŷ)/length(y)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html#Cross-validation-and-hyperparameters-optimisation","page":"0302-perceptron","title":"Cross-validation and hyperparameters optimisation","text":"","category":"section"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"Let's see now using separate training/validation We use the BetaML partition() function","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"((xtrain,xtest),(ytrain,ytest)) = partition([X,y],[0.7,0.3])\nm             = Perceptron(zeros(size(X,2)+1))\nops           = PerceptronTrainingOptions(epochs=5,shuffle=true)\ntrain!(m,xtrain,ytrain,ops)\nŷtrain = predict(m,xtrain)\ntrainAccuracy = accuracy(ŷtrain,ytrain)\nsum(ytrain  .== ŷtrain)/length(ytrain)\n# @edit accuracy(ŷtrain,ytrain)\nŷtest         = predict(m,xtest)\ntestAccuracy  = accuracy(ŷtest,ytest)\ncfOut = ConfusionMatrix(ŷ,y)\nprint(cfOut)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"Lets use CrossValidation","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"((xtrain,xvalidation,xtest),(ytrain,yvalidation,ytest)) = partition([X,y],[0.6,0.2,0.2])\n# Very few records..... let's go back to using only two subsets but with CrossValidation\n((xtrain,xtest),(ytrain,ytest)) = partition([X,y],[0.7,0.3])\n\nsampler    = KFold(nSplits=10)\n\nops     = PerceptronTrainingOptions(epochs=10,shuffle=true)\n(acc,σ) = crossValidation([xtrain,ytrain],sampler) do trainData,valData,rng\n                (xtrain,ytrain) = trainData; (xval,yval) = valData\n                m               = Perceptron(zeros(size(xtrain,2)+1))\n                train!(m,xtrain,ytrain,ops)\n                ŷval         = predict(m,xval)\n                valAccuracy  = accuracy(ŷval,yval)\n                return valAccuracy\n            end\n\nepochsSet  = 1:5:301\nshuffleSet = [false,true]\n\nbestE       = 0\nbestShuffle = false\nbestAcc     = 0.0\n\nfor e in epochsSet, s in shuffleSet\n    global bestE, bestShuffle, bestAcc\n    local acc\n    local ops     = PerceptronTrainingOptions(epochs=e,shuffle=s)\n    (acc,_) = crossValidation([xtrain,ytrain],sampler) do trainData,valData,rng\n                    (xtrain,ytrain) = trainData; (xval,yval) = valData\n                    m               = Perceptron(zeros(size(xtrain,2)+1))\n                    train!(m,xtrain,ytrain,ops)\n                    ŷval            = predict(m,xval)\n                    valAccuracy     = accuracy(ŷval,yval)\n                    return valAccuracy\n                end\n    if acc > bestAcc\n        bestAcc     = acc\n        bestE       = e\n        bestShuffle = s\n    end\nend\n\nbestAcc\nbestE\nbestShuffle\n\nops = PerceptronTrainingOptions(epochs=bestE,shuffle=bestShuffle)\nm   = Perceptron(zeros(size(xtest,2)+1))\ntrain!(m,xtrain,ytrain,ops)\nŷtest           = predict(m,xtest)\ntestAccuracy    = accuracy(ŷtest,ytest)\n\nplot2DClassifierWithData(xtest,ytest,m.θ)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"test....","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"using StatsPlots\nplot(sin)","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"View this file on Github.","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"","category":"page"},{"location":"03_-_ML1_-_Introduction_to_Machine_Learning/0302-perceptron.html","page":"0302-perceptron","title":"0302-perceptron","text":"This page was generated using Literate.jl.","category":"page"},{"location":"index.html#Introduction-to-Scientific-Programming-and-Machine-Learning-with-Julia","page":"Index","title":"Introduction to Scientific Programming and Machine Learning with Julia","text":"","category":"section"},{"location":"index.html","page":"Index","title":"Index","text":"This site contains the scripts discussed in the video.","category":"page"},{"location":"index.html","page":"Index","title":"Index","text":"GitHub repository\nYouTube playlist","category":"page"}]
}