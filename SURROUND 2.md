# SURROUND 
##### PROVIDING FRAMEWORK FOR MACHINE LEARNING
What is Surround?

Surround is a lightweight framework for serving machine learning pipelines in Python. It is designed to be flexible, easy to use and to assist data scientists by focusing them on the problem at hand rather than writing code. Surround was initiated by [Applied Artificial Intelligence Institute](https://a2i2.deakin.edu.au/?_ga=2.89224082.883259530.1567654397-616601693.1516780416) and it is under development.

# COMPONENTS OF SURROUND

Surround mainly works with the help of four components

* Assembler
* Stages 
* Data
* Configuration

## ASSEMBLER

The assembler is one of the main components in surround framework. This component is responsible for constructing and executing a pipeline of data in surround framework.

``` python  
class surround.assembler.Assembler(assembler name=’’, validator=None, estimator=None, config=None)
```
>This class function is responsible for executing the surround pipeline.

| Parameter              | Value    |
| ---------|--------------|
| Assembler name, name of the pipeline| string|
| Validator|			    surround.stage.validator|
|Estimator|					surround.stage.estimator|
|Config|						surround.config.config


The execution of data depends on what mode is currently being used.There are three different modes namely **training**, **batch-predict** and **web-predict** based on which surround pipeline is constructed.
#### TRAINING 
In this mode a sample data is given which has a sufficient number of examples which will allow the algorithm to learn. Different algorithm is tested to identify which will suite the training data. Once the training mode is done the data will be fed to the visualizer which will display the information to data scientists about the training operation. Data will be loaded from the disk with the estimator set to fit mode. Estimator is used to give a model depending on the data and parameters. This is a sample data which is used to fit the model.
``` python
assembler.init_assembler(batch_mode=bool)
assembler.run(data, is_training=bool)
```
#### BATCH MODE
This is also known as validation in which additional data will be provided which is similar to that of the training data but the parameters will be tuned. This set of data is known as validation set which is used to measure the error content by running through the algorithms. The algorithm which produces the least number of errors will be chosen for machine learning purposes.
``` python
assembler.init_assembler(batch_mode=bool)
assembler.run(data, is_training=bool)
```
Batch mode is used to determine whether the visualizer should be used after each stage has been executed.
#### WEB MODE
This is build for production purposes. When the pipeline is done after the training and evaluation process, this mode will be used to serve the pipeline. The input depends on the project which has been generated and the local disk will store the results.Input may come from local disk or from a HTTP request.
``` python
assembler.init_assembler(batch_mode=bool)
assembler.run(data, is_training=bool)
```

Mainly it is used to handle the input request coming from POST request.

## STAGES
These modes will be executed by passing the data through different stages

Input data --> Validator --> Prefilters --> Estimator --> Postfilters --> Visualizer --> Result data 

#### VALIDATION DATASET
This is used to evaluate a given model actually works well with the real set of data. We can’t be sure about the results which we will get once the approved model has been used on real data and so this step is helpful in getting the accuracy prediction of the model that will be used. This step will give us the difference on how the model behaves in respect to the test and actual data.
#### FILTERS
Filters are responsible for gathering data ready for the next stage of execution. It is classified into two pre-filters and post-filters.
###### WRANGLERS (PRE-FILTERS)
This is helpful in converting one format of data into other which can be used for upcoming stages.
###### DECIDERS (POST-FILTERS)
Deciders, placed after Estimators, are stages which make decision based on the output of them. 
#### ESTIMATORS 
Estimators is the phase where actual prediction of surround takes place. Prediction is made depending on the configuration used in surround pipeline. In Surround this is done as another instance of an assembler which runs separately.
``` python
 def set_estimator(self, estimator=None, pre_filters=None, post_filters=None);
```
> This is used to set the estimator during the execution of the pipeline.
#### VISUALIZERS
Visualizers generally denotes output. Right from the start where the machine learning pipeline is initiated and all the way through the working phases, visualizers are useful in giving us the knowledge about how the model works with the selected data.
``` python
 def set_visualizer(self, visualizer);
```
> This is used to set the visualizer that will be executed after batch/train mode. 

# CONFIGURATION 
This contains all the settings loaded in from YAML files. This file will be created with every instance of the assembler and will be passed between each stages of the pipeline.
``` python
class surround.config.config(project_root=None, package_path=None,auto_load=False)
```
>This is responsible for building and storing the data in config.yaml file.

>When prefixed with surround it will allow environmental variable to override data.

>This is responsible for providing read-only access to the stored config files.

# DATA
These objects contain the input data and has information about the errors which are being identified. This also holds the data of every stage.

# SURROUND COMMUNITY
Join Surround AI developer community contribute and learn about Surround. This [GITHUB](https://github.com/a2i2/surround) link can be used to report issues, learn, develop surround features.








