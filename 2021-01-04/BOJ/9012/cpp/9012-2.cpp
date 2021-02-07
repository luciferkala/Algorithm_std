#include <cstdio>
#include <cstring>
#include <stack>
using namespace std;

int main()
{
    stack<char> st;
    char input[51];
    bool isNotFinished;
    int t;

    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        isNotFinished = false;
        st = stack<char>();
        scanf("%s", input);
        for (int j = 0; j < strlen(input); j++)
        {
            if (input[j] == '(')
            {
                st.push('(');
            }
            else
            {
                if (st.size() == 0)
                {
                    isNotFinished = true;
                    printf("NO\n");
                    break;
                }
                st.pop();
            }
        }
        if (isNotFinished == false)
        {
            if (st.size() == 0)
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