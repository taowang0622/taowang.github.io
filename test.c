#include <stdlib.h>
#include <stdio.h>

struct Student{
	int num;
	char name[10];
};

int main(){
	struct Student* me;
	me = malloc(sizeof(struct Student));
	me->num = 1234;
	printf("%d\n", me->num);

	free(me);
	me = NULL;
}
