#include <cstdio>
using namespace std;

int main()
{
    int t, a;
    int b = 0;
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%1d", &a);
        b += a;
    }
    printf("%d\n", b);
    return 0;
}