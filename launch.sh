APP=${1:-blog}
SESSION=$APP'-dev'

tmux new-session -d -s $SESSION
tmux new-window -t $SESSION:1

tmux select-window -t $SESSION:1
tmux send-keys 'bundle exec jekyll serve --livereload --increment' C-m
tmux split-window -h -p 75 
tmux select-pane -R

tmux attach -t $SESSION
