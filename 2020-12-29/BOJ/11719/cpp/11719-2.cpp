#include <cstdio>
using namespace std;

int main()
{
    char s[101];
    while (fgets(s, 100, stdin))
    {
        printf("%s", s);
    }
    return 0;
}