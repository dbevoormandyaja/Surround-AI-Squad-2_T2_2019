# SURROUND 
##### PROVIDING FRAMEWORK FOR MACHINE LEARNING
What is Surround?

Surround is a lightweight framework for serving machine learning pipelines in Python. It is designed to be flexible, easy to use and to assist data scientists by focusing them on the problem at hand rather than writing glue code. Surround was initiated by [Applied Artificial Intelligence Institute](https://a2i2.deakin.edu.au/?_ga=2.89224082.883259530.1567654397-616601693.1516780416)

# COMPONENTS OF SURROUND

Surround mainly works with the help of four components

* Assembler
* Stages 
* Data
* Configuration

## Assembler

The assembler is one of the main components in surround framework. This component is responsible for constructing and executing a pipeline of data in surround framework.

```python  
Class surround.assembler.Assembler(assembler name=’’, validator=None, estimator=None, config=None)
```
>This class function is responsible for executing the surround pipeline.

The execution of data depends on what mode is currently being used.There are three different modes namely **training**, **batch-predict** and **web-predict** based on which surround pipeline is constructed.
#### TRAINING 
In this mode a sample data is given which has a sufficient number of examples which will allow the algorithm to learn. Different algorithm is tested to identify which will suite the training data. Once the training mode is done the data will be fed to the visualizer which will display the information to data scientists about the training operation.
#### BATCH MODE
This is also known as validation in which additional data will be provided which is similar to that of the training data. This set of data is known as validation set which is used to measure the error content by running through the algorithms. The algorithm which produces the least number of errors will be chosen.
#### WEB MODE
This is build for production purposes. When the pipeline is done after the training and evaluation process, this mode will be used to serve the pipeline. The input depends on the project which has been generated and the local disk will store the results.








