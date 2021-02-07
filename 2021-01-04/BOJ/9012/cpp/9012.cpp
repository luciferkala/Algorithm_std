#include <cstdio>
#include <cstring>
using namespace std;

int main()
{
    int t;
    char stack[51];
    char input[51];

    int top = -1;
    int length = 0;
    bool isFinishFindVPS;
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        isFinishFindVPS = true;
        scanf("%s", input);
        int j = -1;
        while (input[j] == '(' || input[j] == ')')
        {
            j++;
            if (input[j] == '(')
            {
                stack[++top] = '(';
                length++;
            }
            else if (input[j] == ')')
            {
                top--;
                length--;
            }
            if (top <= -2 || length <= -1)
            {
                isFinishFindVPS = false;
                printf("NO\n");
                break;
            }
        }
        if (isFinishFindVPS == false)
        {

            if (top == -1 && length == 0)
            {
                printf("YES\n");
            }
            else
            {
                printf("NO\n");
            }
        }
    }
    return 0;
}