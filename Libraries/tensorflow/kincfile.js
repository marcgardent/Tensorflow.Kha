let project = new Project('tensorflow', __dirname);

project.addFile('cpp/tensorflow/**');
project.addIncludeDir('cpp/tensorflow/include/tensorflow/c');
project.addLibFor('x64', 'cpp/tensorflow/lib/tensorflow');
resolve(project);
