
.DEFAULT_GOAL=docker_build

docker_build:
	docker build -t gcr.io/rowan-senior-project/tensorbeat-frontend:$(V) .

docker_push: docker_build
	docker push gcr.io/rowan-senior-project/tensorbeat-frontend:$(V)
