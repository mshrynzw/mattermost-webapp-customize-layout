# How to release

```
cd /usr/local/src/mattermost-webapp-customize-layout
ll
mv /opt/mattermost/client /opt/mattermost/client.bak-$(date +'%F-%H-%M')
ll /opt/mattermost
tar xvzf mattermost-webapp.tar.gz  -C /opt/mattermost
ll /opt/mattermost/
chown mattermost:mattermost /opt/mattermost/client
systemctl restart mattermost
systemctl status mattermost
```

