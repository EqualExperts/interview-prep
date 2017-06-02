.PHONY: clean test

all:
	make deps; make build; make test
clean:
	@rm -rf bin obj packages
deps:
	nuget install; nuget restore
build:
	msbuild
test:
	@mono packages/nspec.1.0.7/tools/NSpecRunner.exe csharp_interview_prep_test/bin/Debug/csharp_interview_prep_test.dll
