#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string a;
    int t;
    int ans = 0;
    cin >> t;
    cin >> a;
    for (int i = 0; i < t; i++)
    {
        int tmp = (int)(a.at(i));
        ans += (tmp - '0');
    }
    cout << ans;
    return 0;
}