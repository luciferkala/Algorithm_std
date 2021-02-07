#include <cstdio>
int n;
char s[51];
int main()
{
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%s", s);
        int c = 0; //스택의 길이
        for (int j = 0; s[j] && c >= 0; j++)
            s[j] == '(' ? c++ : c--;
        puts(c ? "NO" : "YES"); //단순 문자열 출력으로 자동개행이 됨. 그러나 문자열만 가능
    }
    return 0;
}