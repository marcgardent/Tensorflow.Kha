let project = new Project('Empty');

project.addSources('Sources');
project.addSources('Sources');
project.addLibrary("tensorflow");

resolve(project);
